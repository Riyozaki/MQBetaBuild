import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { InventoryItem, EquipmentSlots, DungeonProgress, ItemStats, EquipmentSlot } from '../types';
import { api } from '../services/api';
import { calculateTotalStats, getItemById } from '../data/itemsDatabase';
import { completeQuestAction } from './actions';

interface InventoryState {
  items: InventoryItem[];
  equipment: EquipmentSlots;
  dungeonProgress: DungeonProgress;
  dungeonEnergy: { current: number; max: number; nextRegenAt: string | null };
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: InventoryState = {
  items: [],
  equipment: {
    weapon: null,
    armor: null,
    helmet: null,
    accessory: null,
  },
  dungeonProgress: {},
  dungeonEnergy: { current: 10, max: 10, nextRegenAt: null },
  status: 'idle',
  error: null,
};

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async (email: string) => {
    const response = await api.getInventory(email);
    return response;
  }
);

export const equipItem = createAsyncThunk(
  'inventory/equipItem',
  async ({ email, itemId, slot, classRestriction, playerClass }: { email: string; itemId: string; slot: string; classRestriction?: string[]; playerClass?: string }) => {
    const response = await api.equipItem(email, itemId, slot, classRestriction, playerClass);
    return { ...response, itemId, slot };
  }
);

export const unequipItem = createAsyncThunk(
  'inventory/unequipItem',
  async ({ email, slot }: { email: string; slot: string }) => {
    const response = await api.unequipItem(email, slot);
    return { ...response, slot };
  }
);

export const usePotion = createAsyncThunk(
  'inventory/usePotion',
  async ({ email, itemId }: { email: string; itemId: string }) => {
    const response = await api.usePotion(email, itemId);
    return { ...response, itemId };
  }
);

export const craftItem = createAsyncThunk(
  'inventory/craftItem',
  async ({ email, recipeId, materials, resultItemId, resultQuantity }: { email: string; recipeId: string; materials: any[]; resultItemId: string; resultQuantity: number }) => {
    const response = await api.craftItem(email, recipeId, materials, resultItemId, resultQuantity);
    return { ...response, materials, resultItemId, resultQuantity };
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setInventoryFromLogin: (state, action: PayloadAction<{ inventory?: InventoryItem[]; equipment?: EquipmentSlots; dungeonProgress?: DungeonProgress; dungeonEnergy?: { current: number; max: number; nextRegenAt: string | null } }>) => {
      if (action.payload.inventory) {
        state.items = action.payload.inventory;
      }
      if (action.payload.equipment) {
        state.equipment = { ...state.equipment, ...action.payload.equipment };
      }
      if (action.payload.dungeonProgress) {
        state.dungeonProgress = action.payload.dungeonProgress;
      }
      if (action.payload.dungeonEnergy) {
        state.dungeonEnergy = action.payload.dungeonEnergy;
      }
    },
    addLocalItems: (state, action: PayloadAction<{ itemId: string; quantity: number }[]>) => {
      action.payload.forEach(newItem => {
        const existingItem = state.items.find(i => i.itemId === newItem.itemId);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.items.push({ itemId: newItem.itemId, quantity: newItem.quantity, obtainedAt: new Date().toISOString() });
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.inventory) state.items = action.payload.inventory;
        if (action.payload.equipment) state.equipment = { ...state.equipment, ...action.payload.equipment };
        if (action.payload.dungeonProgress) state.dungeonProgress = action.payload.dungeonProgress;
        if (action.payload.dungeonEnergy) state.dungeonEnergy = action.payload.dungeonEnergy;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch inventory';
      })
      .addCase(equipItem.fulfilled, (state, action) => {
        if (action.payload.success) {
          const { itemId, slot } = action.payload;
          
          // Remove from inventory
          const itemIndex = state.items.findIndex(i => i.itemId === itemId);
          if (itemIndex !== -1) {
            if (state.items[itemIndex].quantity > 1) {
              state.items[itemIndex].quantity -= 1;
            } else {
              state.items.splice(itemIndex, 1);
            }
          }

          // Put previously equipped item back to inventory
          const prevItem = state.equipment[slot as keyof EquipmentSlots];
          if (prevItem) {
            const existingPrevItem = state.items.find(i => i.itemId === prevItem);
            if (existingPrevItem) {
              existingPrevItem.quantity += 1;
            } else {
              state.items.push({ itemId: prevItem, quantity: 1, obtainedAt: new Date().toISOString() });
            }
          }

          // Equip new item
          state.equipment[slot as keyof EquipmentSlots] = itemId;
        }
      })
      .addCase(unequipItem.fulfilled, (state, action) => {
        if (action.payload.success) {
          const { slot } = action.payload;
          const itemId = state.equipment[slot as keyof EquipmentSlots];
          
          if (itemId) {
            // Put item back to inventory
            const existingItem = state.items.find(i => i.itemId === itemId);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.items.push({ itemId, quantity: 1, obtainedAt: new Date().toISOString() });
            }
            
            // Clear slot
            state.equipment[slot as keyof EquipmentSlots] = null;
          }
        }
      })
      .addCase(usePotion.fulfilled, (state, action) => {
        if (action.payload.success) {
          const { itemId } = action.payload;
          const itemIndex = state.items.findIndex(i => i.itemId === itemId);
          if (itemIndex !== -1) {
            if (state.items[itemIndex].quantity > 1) {
              state.items[itemIndex].quantity -= 1;
            } else {
              state.items.splice(itemIndex, 1);
            }
          }
        }
      })
      .addCase(craftItem.fulfilled, (state, action) => {
        if (action.payload.success) {
          const { materials, resultItemId, resultQuantity } = action.payload;
          
          // Remove materials
          materials.forEach((mat: any) => {
            const matIndex = state.items.findIndex(i => i.itemId === mat.itemId);
            if (matIndex !== -1) {
              if (state.items[matIndex].quantity > mat.quantity) {
                state.items[matIndex].quantity -= mat.quantity;
              } else {
                state.items.splice(matIndex, 1);
              }
            }
          });

          // Add result item
          const existingResult = state.items.find(i => i.itemId === resultItemId);
          if (existingResult) {
            existingResult.quantity += resultQuantity;
          } else {
            state.items.push({ itemId: resultItemId, quantity: resultQuantity, obtainedAt: new Date().toISOString() });
          }
        }
      })
      .addCase(completeQuestAction.fulfilled, (state, action) => {
        const { loot } = action.payload as any;
        if (loot && Array.isArray(loot)) {
          loot.forEach((newItem: any) => {
            const existingItem = state.items.find(i => i.itemId === newItem.itemId);
            if (existingItem) {
              existingItem.quantity += newItem.quantity;
            } else {
              state.items.push({ itemId: newItem.itemId, quantity: newItem.quantity, obtainedAt: new Date().toISOString() });
            }
          });
        }
      });
  },
});

export const { setInventoryFromLogin, addLocalItems } = inventorySlice.actions;

// Selectors
export const selectInventory = (state: { inventory: InventoryState }) => state.inventory.items;
export const selectEquipment = (state: { inventory: InventoryState }) => state.inventory.equipment;

export const selectEquippedStats = (state: { inventory: InventoryState }): ItemStats => {
  return calculateTotalStats(state.inventory.equipment);
};

export const selectItemCount = (state: { inventory: InventoryState }, itemId: string) => {
  const item = state.inventory.items.find(i => i.itemId === itemId);
  return item ? item.quantity : 0;
};

export const selectPotions = (state: { inventory: InventoryState }) => {
  return state.inventory.items.filter(i => {
    const itemDef = getItemById(i.itemId);
    return itemDef && itemDef.type === 'potion';
  });
};

export const selectMaterials = (state: { inventory: InventoryState }) => {
  return state.inventory.items.filter(i => {
    const itemDef = getItemById(i.itemId);
    return itemDef && itemDef.type === 'material';
  });
};

export const selectEquipmentForSlot = (state: { inventory: InventoryState }, slot: EquipmentSlot, playerClass?: string) => {
  return state.inventory.items.filter(i => {
    const itemDef = getItemById(i.itemId);
    if (!itemDef) return false;
    
    const matchesSlot = itemDef.slot === slot;
    const matchesClass = !itemDef.classRestriction || itemDef.classRestriction.length === 0 || (playerClass && itemDef.classRestriction.includes(playerClass as any));
    
    return matchesSlot && matchesClass;
  });
};

export default inventorySlice.reducer;
