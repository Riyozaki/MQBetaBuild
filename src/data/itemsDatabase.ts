import { GameItem, SetBonus, CraftRecipe, ItemType, EquipmentSlot, HeroClass, EquipmentSlots, ItemStats } from '../types';

export const ITEMS_DATABASE: Record<string, GameItem> = {
  "w_warrior_c_01": {
    "id": "w_warrior_c_01",
    "name": "Common Меч",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Sword",
    "stats": {
      "attack": 10,
      "critChance": 0.05
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_warrior_c_02": {
    "id": "w_warrior_c_02",
    "name": "Common Топор",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Axe",
    "stats": {
      "attack": 12,
      "critChance": 0.05
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_warrior_c_03": {
    "id": "w_warrior_c_03",
    "name": "Common Копьё",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Target",
    "stats": {
      "attack": 14,
      "critChance": 0.05
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_warrior_r_01": {
    "id": "w_warrior_r_01",
    "name": "Rare Меч",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Sword",
    "stats": {
      "attack": 20,
      "critChance": 0.1
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_warrior_r_02": {
    "id": "w_warrior_r_02",
    "name": "Rare Топор",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Axe",
    "stats": {
      "attack": 22,
      "critChance": 0.1
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_warrior_r_03": {
    "id": "w_warrior_r_03",
    "name": "Rare Копьё",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Target",
    "stats": {
      "attack": 24,
      "critChance": 0.1
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_warrior_e_01": {
    "id": "w_warrior_e_01",
    "name": "Epic Меч",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Sword",
    "stats": {
      "attack": 40,
      "critChance": 0.2
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_warrior_e_02": {
    "id": "w_warrior_e_02",
    "name": "Epic Топор",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Axe",
    "stats": {
      "attack": 42,
      "critChance": 0.2
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_warrior_e_03": {
    "id": "w_warrior_e_03",
    "name": "Epic Копьё",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Target",
    "stats": {
      "attack": 44,
      "critChance": 0.2
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_warrior_l_01": {
    "id": "w_warrior_l_01",
    "name": "Legendary Меч",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Sword",
    "stats": {
      "attack": 80,
      "critChance": 0.4
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": "set_dragon_warrior",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_warrior_l_02": {
    "id": "w_warrior_l_02",
    "name": "Legendary Топор",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Axe",
    "stats": {
      "attack": 82,
      "critChance": 0.4
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_warrior_l_03": {
    "id": "w_warrior_l_03",
    "name": "Legendary Копьё",
    "description": "Мощное оружие для класса warrior",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Target",
    "stats": {
      "attack": 84,
      "critChance": 0.4
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_mage_c_01": {
    "id": "w_mage_c_01",
    "name": "Common Посох",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Wand",
    "stats": {
      "attack": 10,
      "critChance": 0.05
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_mage_c_02": {
    "id": "w_mage_c_02",
    "name": "Common Книга заклинаний",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Book",
    "stats": {
      "attack": 12,
      "critChance": 0.05
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_mage_c_03": {
    "id": "w_mage_c_03",
    "name": "Common Жезл",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Sparkles",
    "stats": {
      "attack": 14,
      "critChance": 0.05
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_mage_r_01": {
    "id": "w_mage_r_01",
    "name": "Rare Посох",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Wand",
    "stats": {
      "attack": 20,
      "critChance": 0.1
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_mage_r_02": {
    "id": "w_mage_r_02",
    "name": "Rare Книга заклинаний",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Book",
    "stats": {
      "attack": 22,
      "critChance": 0.1
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_mage_r_03": {
    "id": "w_mage_r_03",
    "name": "Rare Жезл",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Sparkles",
    "stats": {
      "attack": 24,
      "critChance": 0.1
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_mage_e_01": {
    "id": "w_mage_e_01",
    "name": "Epic Посох",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Wand",
    "stats": {
      "attack": 40,
      "critChance": 0.2
    },
    "classRestriction": [
      "mage"
    ],
    "setId": "set_fire_mage",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_mage_e_02": {
    "id": "w_mage_e_02",
    "name": "Epic Книга заклинаний",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Book",
    "stats": {
      "attack": 42,
      "critChance": 0.2
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_mage_e_03": {
    "id": "w_mage_e_03",
    "name": "Epic Жезл",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Sparkles",
    "stats": {
      "attack": 44,
      "critChance": 0.2
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_mage_l_01": {
    "id": "w_mage_l_01",
    "name": "Legendary Посох",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Wand",
    "stats": {
      "attack": 80,
      "critChance": 0.4
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_mage_l_02": {
    "id": "w_mage_l_02",
    "name": "Legendary Книга заклинаний",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Book",
    "stats": {
      "attack": 82,
      "critChance": 0.4
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_mage_l_03": {
    "id": "w_mage_l_03",
    "name": "Legendary Жезл",
    "description": "Мощное оружие для класса mage",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Sparkles",
    "stats": {
      "attack": 84,
      "critChance": 0.4
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_ranger_c_01": {
    "id": "w_ranger_c_01",
    "name": "Common Лук",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Crosshair",
    "stats": {
      "attack": 10,
      "critChance": 0.05
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_ranger_c_02": {
    "id": "w_ranger_c_02",
    "name": "Common Арбалет",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Crosshair",
    "stats": {
      "attack": 12,
      "critChance": 0.05
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_ranger_c_03": {
    "id": "w_ranger_c_03",
    "name": "Common Кинжал",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Dagger",
    "stats": {
      "attack": 14,
      "critChance": 0.05
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_ranger_r_01": {
    "id": "w_ranger_r_01",
    "name": "Rare Лук",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Crosshair",
    "stats": {
      "attack": 20,
      "critChance": 0.1
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_ranger_r_02": {
    "id": "w_ranger_r_02",
    "name": "Rare Арбалет",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Crosshair",
    "stats": {
      "attack": 22,
      "critChance": 0.1
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_ranger_r_03": {
    "id": "w_ranger_r_03",
    "name": "Rare Кинжал",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Dagger",
    "stats": {
      "attack": 24,
      "critChance": 0.1
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_ranger_e_01": {
    "id": "w_ranger_e_01",
    "name": "Epic Лук",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Crosshair",
    "stats": {
      "attack": 40,
      "critChance": 0.2
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": "set_shadow_ranger",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_ranger_e_02": {
    "id": "w_ranger_e_02",
    "name": "Epic Арбалет",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Crosshair",
    "stats": {
      "attack": 42,
      "critChance": 0.2
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_ranger_e_03": {
    "id": "w_ranger_e_03",
    "name": "Epic Кинжал",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Dagger",
    "stats": {
      "attack": 44,
      "critChance": 0.2
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_ranger_l_01": {
    "id": "w_ranger_l_01",
    "name": "Legendary Лук",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Crosshair",
    "stats": {
      "attack": 80,
      "critChance": 0.4
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_ranger_l_02": {
    "id": "w_ranger_l_02",
    "name": "Legendary Арбалет",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Crosshair",
    "stats": {
      "attack": 82,
      "critChance": 0.4
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_ranger_l_03": {
    "id": "w_ranger_l_03",
    "name": "Legendary Кинжал",
    "description": "Мощное оружие для класса ranger",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Dagger",
    "stats": {
      "attack": 84,
      "critChance": 0.4
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_healer_c_01": {
    "id": "w_healer_c_01",
    "name": "Common Священный жезл",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Heart",
    "stats": {
      "attack": 10,
      "critChance": 0.05
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_healer_c_02": {
    "id": "w_healer_c_02",
    "name": "Common Амулет света",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Sun",
    "stats": {
      "attack": 12,
      "critChance": 0.05
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_healer_c_03": {
    "id": "w_healer_c_03",
    "name": "Common Кадило",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Common",
    "icon": "Flame",
    "stats": {
      "attack": 14,
      "critChance": 0.05
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "w_healer_r_01": {
    "id": "w_healer_r_01",
    "name": "Rare Священный жезл",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Heart",
    "stats": {
      "attack": 20,
      "critChance": 0.1
    },
    "classRestriction": [
      "healer"
    ],
    "setId": "set_holy_healer",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_healer_r_02": {
    "id": "w_healer_r_02",
    "name": "Rare Амулет света",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Sun",
    "stats": {
      "attack": 22,
      "critChance": 0.1
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_healer_r_03": {
    "id": "w_healer_r_03",
    "name": "Rare Кадило",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Rare",
    "icon": "Flame",
    "stats": {
      "attack": 24,
      "critChance": 0.1
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "w_healer_e_01": {
    "id": "w_healer_e_01",
    "name": "Epic Священный жезл",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Heart",
    "stats": {
      "attack": 40,
      "critChance": 0.2
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_healer_e_02": {
    "id": "w_healer_e_02",
    "name": "Epic Амулет света",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Sun",
    "stats": {
      "attack": 42,
      "critChance": 0.2
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_healer_e_03": {
    "id": "w_healer_e_03",
    "name": "Epic Кадило",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Epic",
    "icon": "Flame",
    "stats": {
      "attack": 44,
      "critChance": 0.2
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "w_healer_l_01": {
    "id": "w_healer_l_01",
    "name": "Legendary Священный жезл",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Heart",
    "stats": {
      "attack": 80,
      "critChance": 0.4
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_healer_l_02": {
    "id": "w_healer_l_02",
    "name": "Legendary Амулет света",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Sun",
    "stats": {
      "attack": 82,
      "critChance": 0.4
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "w_healer_l_03": {
    "id": "w_healer_l_03",
    "name": "Legendary Кадило",
    "description": "Мощное оружие для класса healer",
    "type": "weapon",
    "slot": "weapon",
    "rarity": "Legendary",
    "icon": "Flame",
    "stats": {
      "attack": 84,
      "critChance": 0.4
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "arm_warrior_c_01": {
    "id": "arm_warrior_c_01",
    "name": "Common Броня 1",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_warrior_c_02": {
    "id": "arm_warrior_c_02",
    "name": "Common Броня 2",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 12,
      "hpBonus": 20
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_warrior_r_01": {
    "id": "arm_warrior_r_01",
    "name": "Rare Броня 1",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_warrior_r_02": {
    "id": "arm_warrior_r_02",
    "name": "Rare Броня 2",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 22,
      "hpBonus": 40
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_warrior_e_01": {
    "id": "arm_warrior_e_01",
    "name": "Epic Броня 1",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_warrior_e_02": {
    "id": "arm_warrior_e_02",
    "name": "Epic Броня 2",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 42,
      "hpBonus": 80
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_warrior_l_01": {
    "id": "arm_warrior_l_01",
    "name": "Legendary Броня 1",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 80,
      "hpBonus": 160
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": "set_dragon_warrior",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_warrior_l_02": {
    "id": "arm_warrior_l_02",
    "name": "Legendary Броня 2",
    "description": "Надежная броня для warrior",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 82,
      "hpBonus": 160
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_mage_c_01": {
    "id": "arm_mage_c_01",
    "name": "Common Броня 1",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_mage_c_02": {
    "id": "arm_mage_c_02",
    "name": "Common Броня 2",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 12,
      "hpBonus": 20
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_mage_r_01": {
    "id": "arm_mage_r_01",
    "name": "Rare Броня 1",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_mage_r_02": {
    "id": "arm_mage_r_02",
    "name": "Rare Броня 2",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 22,
      "hpBonus": 40
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_mage_e_01": {
    "id": "arm_mage_e_01",
    "name": "Epic Броня 1",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "mage"
    ],
    "setId": "set_fire_mage",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_mage_e_02": {
    "id": "arm_mage_e_02",
    "name": "Epic Броня 2",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 42,
      "hpBonus": 80
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_mage_l_01": {
    "id": "arm_mage_l_01",
    "name": "Legendary Броня 1",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 80,
      "hpBonus": 160
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_mage_l_02": {
    "id": "arm_mage_l_02",
    "name": "Legendary Броня 2",
    "description": "Надежная броня для mage",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 82,
      "hpBonus": 160
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_ranger_c_01": {
    "id": "arm_ranger_c_01",
    "name": "Common Броня 1",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_ranger_c_02": {
    "id": "arm_ranger_c_02",
    "name": "Common Броня 2",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 12,
      "hpBonus": 20
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_ranger_r_01": {
    "id": "arm_ranger_r_01",
    "name": "Rare Броня 1",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_ranger_r_02": {
    "id": "arm_ranger_r_02",
    "name": "Rare Броня 2",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 22,
      "hpBonus": 40
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_ranger_e_01": {
    "id": "arm_ranger_e_01",
    "name": "Epic Броня 1",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": "set_shadow_ranger",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_ranger_e_02": {
    "id": "arm_ranger_e_02",
    "name": "Epic Броня 2",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 42,
      "hpBonus": 80
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_ranger_l_01": {
    "id": "arm_ranger_l_01",
    "name": "Legendary Броня 1",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 80,
      "hpBonus": 160
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_ranger_l_02": {
    "id": "arm_ranger_l_02",
    "name": "Legendary Броня 2",
    "description": "Надежная броня для ranger",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 82,
      "hpBonus": 160
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_healer_c_01": {
    "id": "arm_healer_c_01",
    "name": "Common Броня 1",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_healer_c_02": {
    "id": "arm_healer_c_02",
    "name": "Common Броня 2",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Common",
    "icon": "Shield",
    "stats": {
      "defense": 12,
      "hpBonus": 20
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "arm_healer_r_01": {
    "id": "arm_healer_r_01",
    "name": "Rare Броня 1",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "healer"
    ],
    "setId": "set_holy_healer",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_healer_r_02": {
    "id": "arm_healer_r_02",
    "name": "Rare Броня 2",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Rare",
    "icon": "Shield",
    "stats": {
      "defense": 22,
      "hpBonus": 40
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "arm_healer_e_01": {
    "id": "arm_healer_e_01",
    "name": "Epic Броня 1",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_healer_e_02": {
    "id": "arm_healer_e_02",
    "name": "Epic Броня 2",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Epic",
    "icon": "Shield",
    "stats": {
      "defense": 42,
      "hpBonus": 80
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 60,
    "buyPrice": 120
  },
  "arm_healer_l_01": {
    "id": "arm_healer_l_01",
    "name": "Legendary Броня 1",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 80,
      "hpBonus": 160
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "arm_healer_l_02": {
    "id": "arm_healer_l_02",
    "name": "Legendary Броня 2",
    "description": "Надежная броня для healer",
    "type": "armor",
    "slot": "armor",
    "rarity": "Legendary",
    "icon": "Shield",
    "stats": {
      "defense": 82,
      "hpBonus": 160
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 120,
    "buyPrice": 240
  },
  "hlm_warrior_c_01": {
    "id": "hlm_warrior_c_01",
    "name": "Common Шлем 1",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 5,
      "hpBonus": 10
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_warrior_c_02": {
    "id": "hlm_warrior_c_02",
    "name": "Common Шлем 2",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 6,
      "hpBonus": 10
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_warrior_r_01": {
    "id": "hlm_warrior_r_01",
    "name": "Rare Шлем 1",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_warrior_r_02": {
    "id": "hlm_warrior_r_02",
    "name": "Rare Шлем 2",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 11,
      "hpBonus": 20
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_warrior_e_01": {
    "id": "hlm_warrior_e_01",
    "name": "Epic Шлем 1",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_warrior_e_02": {
    "id": "hlm_warrior_e_02",
    "name": "Epic Шлем 2",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 21,
      "hpBonus": 40
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_warrior_l_01": {
    "id": "hlm_warrior_l_01",
    "name": "Legendary Шлем 1",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": "set_dragon_warrior",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_warrior_l_02": {
    "id": "hlm_warrior_l_02",
    "name": "Legendary Шлем 2",
    "description": "Крепкий шлем для warrior",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 41,
      "hpBonus": 80
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_mage_c_01": {
    "id": "hlm_mage_c_01",
    "name": "Common Шлем 1",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 5,
      "hpBonus": 10
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_mage_c_02": {
    "id": "hlm_mage_c_02",
    "name": "Common Шлем 2",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 6,
      "hpBonus": 10
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_mage_r_01": {
    "id": "hlm_mage_r_01",
    "name": "Rare Шлем 1",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_mage_r_02": {
    "id": "hlm_mage_r_02",
    "name": "Rare Шлем 2",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 11,
      "hpBonus": 20
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_mage_e_01": {
    "id": "hlm_mage_e_01",
    "name": "Epic Шлем 1",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "mage"
    ],
    "setId": "set_fire_mage",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_mage_e_02": {
    "id": "hlm_mage_e_02",
    "name": "Epic Шлем 2",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 21,
      "hpBonus": 40
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_mage_l_01": {
    "id": "hlm_mage_l_01",
    "name": "Legendary Шлем 1",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_mage_l_02": {
    "id": "hlm_mage_l_02",
    "name": "Legendary Шлем 2",
    "description": "Крепкий шлем для mage",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 41,
      "hpBonus": 80
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_ranger_c_01": {
    "id": "hlm_ranger_c_01",
    "name": "Common Шлем 1",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 5,
      "hpBonus": 10
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_ranger_c_02": {
    "id": "hlm_ranger_c_02",
    "name": "Common Шлем 2",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 6,
      "hpBonus": 10
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_ranger_r_01": {
    "id": "hlm_ranger_r_01",
    "name": "Rare Шлем 1",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_ranger_r_02": {
    "id": "hlm_ranger_r_02",
    "name": "Rare Шлем 2",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 11,
      "hpBonus": 20
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_ranger_e_01": {
    "id": "hlm_ranger_e_01",
    "name": "Epic Шлем 1",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_ranger_e_02": {
    "id": "hlm_ranger_e_02",
    "name": "Epic Шлем 2",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 21,
      "hpBonus": 40
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_ranger_l_01": {
    "id": "hlm_ranger_l_01",
    "name": "Legendary Шлем 1",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_ranger_l_02": {
    "id": "hlm_ranger_l_02",
    "name": "Legendary Шлем 2",
    "description": "Крепкий шлем для ranger",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 41,
      "hpBonus": 80
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_healer_c_01": {
    "id": "hlm_healer_c_01",
    "name": "Common Шлем 1",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 5,
      "hpBonus": 10
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_healer_c_02": {
    "id": "hlm_healer_c_02",
    "name": "Common Шлем 2",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Common",
    "icon": "HardHat",
    "stats": {
      "defense": 6,
      "hpBonus": 10
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 10,
    "buyPrice": 20
  },
  "hlm_healer_r_01": {
    "id": "hlm_healer_r_01",
    "name": "Rare Шлем 1",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 10,
      "hpBonus": 20
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_healer_r_02": {
    "id": "hlm_healer_r_02",
    "name": "Rare Шлем 2",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Rare",
    "icon": "HardHat",
    "stats": {
      "defense": 11,
      "hpBonus": 20
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "hlm_healer_e_01": {
    "id": "hlm_healer_e_01",
    "name": "Epic Шлем 1",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 20,
      "hpBonus": 40
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_healer_e_02": {
    "id": "hlm_healer_e_02",
    "name": "Epic Шлем 2",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Epic",
    "icon": "HardHat",
    "stats": {
      "defense": 21,
      "hpBonus": 40
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "hlm_healer_l_01": {
    "id": "hlm_healer_l_01",
    "name": "Legendary Шлем 1",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 40,
      "hpBonus": 80
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "hlm_healer_l_02": {
    "id": "hlm_healer_l_02",
    "name": "Legendary Шлем 2",
    "description": "Крепкий шлем для healer",
    "type": "helmet",
    "slot": "helmet",
    "rarity": "Legendary",
    "icon": "HardHat",
    "stats": {
      "defense": 41,
      "hpBonus": 80
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_warrior_c_01": {
    "id": "acc_warrior_c_01",
    "name": "Common Аксессуар 1",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 5,
      "xpBonus": 2
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_warrior_c_02": {
    "id": "acc_warrior_c_02",
    "name": "Common Аксессуар 2",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 6,
      "xpBonus": 2
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_warrior_r_01": {
    "id": "acc_warrior_r_01",
    "name": "Rare Аксессуар 1",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 10,
      "xpBonus": 4
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_warrior_r_02": {
    "id": "acc_warrior_r_02",
    "name": "Rare Аксессуар 2",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 11,
      "xpBonus": 4
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_warrior_e_01": {
    "id": "acc_warrior_e_01",
    "name": "Epic Аксессуар 1",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 20,
      "xpBonus": 8
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_warrior_e_02": {
    "id": "acc_warrior_e_02",
    "name": "Epic Аксессуар 2",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 21,
      "xpBonus": 8
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_warrior_l_01": {
    "id": "acc_warrior_l_01",
    "name": "Legendary Аксессуар 1",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 40,
      "xpBonus": 16
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": "set_dragon_warrior",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_warrior_l_02": {
    "id": "acc_warrior_l_02",
    "name": "Legendary Аксессуар 2",
    "description": "Магический аксессуар для warrior",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 41,
      "xpBonus": 16
    },
    "classRestriction": [
      "warrior"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_mage_c_01": {
    "id": "acc_mage_c_01",
    "name": "Common Аксессуар 1",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 5,
      "xpBonus": 2
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_mage_c_02": {
    "id": "acc_mage_c_02",
    "name": "Common Аксессуар 2",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 6,
      "xpBonus": 2
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_mage_r_01": {
    "id": "acc_mage_r_01",
    "name": "Rare Аксессуар 1",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 10,
      "xpBonus": 4
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_mage_r_02": {
    "id": "acc_mage_r_02",
    "name": "Rare Аксессуар 2",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 11,
      "xpBonus": 4
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_mage_e_01": {
    "id": "acc_mage_e_01",
    "name": "Epic Аксессуар 1",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 20,
      "xpBonus": 8
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_mage_e_02": {
    "id": "acc_mage_e_02",
    "name": "Epic Аксессуар 2",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 21,
      "xpBonus": 8
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_mage_l_01": {
    "id": "acc_mage_l_01",
    "name": "Legendary Аксессуар 1",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 40,
      "xpBonus": 16
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_mage_l_02": {
    "id": "acc_mage_l_02",
    "name": "Legendary Аксессуар 2",
    "description": "Магический аксессуар для mage",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 41,
      "xpBonus": 16
    },
    "classRestriction": [
      "mage"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_ranger_c_01": {
    "id": "acc_ranger_c_01",
    "name": "Common Аксессуар 1",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 5,
      "xpBonus": 2
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_ranger_c_02": {
    "id": "acc_ranger_c_02",
    "name": "Common Аксессуар 2",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 6,
      "xpBonus": 2
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_ranger_r_01": {
    "id": "acc_ranger_r_01",
    "name": "Rare Аксессуар 1",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 10,
      "xpBonus": 4
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_ranger_r_02": {
    "id": "acc_ranger_r_02",
    "name": "Rare Аксессуар 2",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 11,
      "xpBonus": 4
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_ranger_e_01": {
    "id": "acc_ranger_e_01",
    "name": "Epic Аксессуар 1",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 20,
      "xpBonus": 8
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": "set_shadow_ranger",
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_ranger_e_02": {
    "id": "acc_ranger_e_02",
    "name": "Epic Аксессуар 2",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 21,
      "xpBonus": 8
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_ranger_l_01": {
    "id": "acc_ranger_l_01",
    "name": "Legendary Аксессуар 1",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 40,
      "xpBonus": 16
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_ranger_l_02": {
    "id": "acc_ranger_l_02",
    "name": "Legendary Аксессуар 2",
    "description": "Магический аксессуар для ranger",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 41,
      "xpBonus": 16
    },
    "classRestriction": [
      "ranger"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_healer_c_01": {
    "id": "acc_healer_c_01",
    "name": "Common Аксессуар 1",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 5,
      "xpBonus": 2
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_healer_c_02": {
    "id": "acc_healer_c_02",
    "name": "Common Аксессуар 2",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Common",
    "icon": "Gem",
    "stats": {
      "mathBonus": 6,
      "xpBonus": 2
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 20,
    "buyPrice": 40
  },
  "acc_healer_r_01": {
    "id": "acc_healer_r_01",
    "name": "Rare Аксессуар 1",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 10,
      "xpBonus": 4
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_healer_r_02": {
    "id": "acc_healer_r_02",
    "name": "Rare Аксессуар 2",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Rare",
    "icon": "Gem",
    "stats": {
      "mathBonus": 11,
      "xpBonus": 4
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "acc_healer_e_01": {
    "id": "acc_healer_e_01",
    "name": "Epic Аксессуар 1",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 20,
      "xpBonus": 8
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_healer_e_02": {
    "id": "acc_healer_e_02",
    "name": "Epic Аксессуар 2",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Epic",
    "icon": "Gem",
    "stats": {
      "mathBonus": 21,
      "xpBonus": 8
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 80,
    "buyPrice": 160
  },
  "acc_healer_l_01": {
    "id": "acc_healer_l_01",
    "name": "Legendary Аксессуар 1",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 40,
      "xpBonus": 16
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "acc_healer_l_02": {
    "id": "acc_healer_l_02",
    "name": "Legendary Аксессуар 2",
    "description": "Магический аксессуар для healer",
    "type": "accessory",
    "slot": "accessory",
    "rarity": "Legendary",
    "icon": "Gem",
    "stats": {
      "mathBonus": 41,
      "xpBonus": 16
    },
    "classRestriction": [
      "healer"
    ],
    "setId": null,
    "stackable": false,
    "maxStack": 1,
    "sellPrice": 160,
    "buyPrice": 320
  },
  "potion_hp_small": {
    "id": "potion_hp_small",
    "name": "Малое зелье здоровья",
    "description": "Восстанавливает 50 HP",
    "type": "potion",
    "rarity": "Common",
    "icon": "FlaskConical",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "potion_hp_large": {
    "id": "potion_hp_large",
    "name": "Большое зелье здоровья",
    "description": "Восстанавливает 150 HP",
    "type": "potion",
    "rarity": "Rare",
    "icon": "FlaskConical",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 40,
    "buyPrice": 80
  },
  "potion_damage": {
    "id": "potion_damage",
    "name": "Зелье урона",
    "description": "+50% урон на 1 ход",
    "type": "potion",
    "rarity": "Rare",
    "icon": "Flame",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 25,
    "buyPrice": 50
  },
  "potion_time": {
    "id": "potion_time",
    "name": "Зелье времени",
    "description": "+5 сек к таймеру",
    "type": "potion",
    "rarity": "Epic",
    "icon": "Clock",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 30,
    "buyPrice": 60
  },
  "potion_shield": {
    "id": "potion_shield",
    "name": "Зелье щита",
    "description": "Блокирует 1 атаку",
    "type": "potion",
    "rarity": "Legendary",
    "icon": "Shield",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 50,
    "buyPrice": 100
  },
  "mat_common_mat": {
    "id": "mat_common_mat",
    "name": "Обычная руда",
    "description": "Материал для крафта",
    "type": "material",
    "rarity": "Common",
    "icon": "Box",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 5,
    "buyPrice": 10
  },
  "mat_rare_mat": {
    "id": "mat_rare_mat",
    "name": "Редкая эссенция",
    "description": "Материал для крафта",
    "type": "material",
    "rarity": "Rare",
    "icon": "Sparkles",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 15,
    "buyPrice": 30
  },
  "mat_epic_mat": {
    "id": "mat_epic_mat",
    "name": "Эпический осколок",
    "description": "Материал для крафта",
    "type": "material",
    "rarity": "Epic",
    "icon": "Gem",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 50,
    "buyPrice": 100
  },
  "mat_legendary_mat": {
    "id": "mat_legendary_mat",
    "name": "Легендарный кристалл",
    "description": "Материал для крафта",
    "type": "material",
    "rarity": "Legendary",
    "icon": "Diamond",
    "classRestriction": [],
    "setId": null,
    "stackable": true,
    "maxStack": 99,
    "sellPrice": 200,
    "buyPrice": 400
  }
};

export const SETS_DATABASE: SetBonus[] = [
  {
    "setId": "set_fire_mage",
    "setName": "Сет Огненного Мага",
    "pieces": [
      "w_mage_e_01",
      "arm_mage_e_01",
      "hlm_mage_e_01"
    ],
    "bonuses": [
      {
        "required": 2,
        "stats": {
          "mathBonus": 15
        },
        "label": "+15% mathBonus"
      },
      {
        "required": 3,
        "stats": {
          "mathBonus": 30,
          "critChance": 0.15
        },
        "label": "+30% mathBonus, +15% critChance"
      }
    ]
  },
  {
    "setId": "set_dragon_warrior",
    "setName": "Сет Драконьего Воина",
    "pieces": [
      "w_warrior_l_01",
      "arm_warrior_l_01",
      "hlm_warrior_l_01",
      "acc_warrior_l_01"
    ],
    "bonuses": [
      {
        "required": 2,
        "stats": {
          "attack": 50
        },
        "label": "+50 Attack"
      },
      {
        "required": 4,
        "stats": {
          "attack": 120,
          "hpBonus": 500
        },
        "label": "+120 Attack, +500 HP"
      }
    ]
  },
  {
    "setId": "set_shadow_ranger",
    "setName": "Сет Теневого Следопыта",
    "pieces": [
      "w_ranger_e_01",
      "arm_ranger_e_01",
      "acc_ranger_e_01"
    ],
    "bonuses": [
      {
        "required": 2,
        "stats": {
          "speed": 2
        },
        "label": "+2 Speed"
      },
      {
        "required": 3,
        "stats": {
          "speed": 5,
          "critChance": 0.2
        },
        "label": "+5 Speed, +20% critChance"
      }
    ]
  },
  {
    "setId": "set_holy_healer",
    "setName": "Сет Святого Целителя",
    "pieces": [
      "w_healer_r_01",
      "arm_healer_r_01"
    ],
    "bonuses": [
      {
        "required": 2,
        "stats": {
          "defense": 30,
          "hpBonus": 100
        },
        "label": "+30 Defense, +100 HP"
      }
    ]
  }
];

export const CRAFT_RECIPES: CraftRecipe[] = [
  {
    "id": "rec_01",
    "name": "Крафт Редкой эссенции",
    "resultItemId": "mat_rare_mat",
    "resultQuantity": 1,
    "materials": [
      {
        "itemId": "mat_common_mat",
        "quantity": 5
      }
    ],
    "requiredLevel": 5
  },
  {
    "id": "rec_02",
    "name": "Крафт Эпического осколка",
    "resultItemId": "mat_epic_mat",
    "resultQuantity": 1,
    "materials": [
      {
        "itemId": "mat_rare_mat",
        "quantity": 5
      }
    ],
    "requiredLevel": 10
  },
  {
    "id": "rec_03",
    "name": "Крафт Большого зелья",
    "resultItemId": "potion_hp_large",
    "resultQuantity": 1,
    "materials": [
      {
        "itemId": "potion_hp_small",
        "quantity": 3
      },
      {
        "itemId": "mat_common_mat",
        "quantity": 1
      }
    ],
    "requiredLevel": 3
  }
];

export function getItemById(id: string): GameItem | undefined {
  return ITEMS_DATABASE[id];
}

export function getItemsByType(type: ItemType): GameItem[] {
  return Object.values(ITEMS_DATABASE).filter(item => item.type === type);
}

export function getItemsByClassAndSlot(heroClass: HeroClass, slot: EquipmentSlot): GameItem[] {
  return Object.values(ITEMS_DATABASE).filter(item => 
    item.slot === slot && 
    (!item.classRestriction || item.classRestriction.length === 0 || item.classRestriction.includes(heroClass))
  );
}

export function calculateSetBonuses(equipment: EquipmentSlots): { setId: string; setName: string; activePieces: number; totalPieces: number; activeBonus: ItemStats; label: string }[] {
  const equippedIds = Object.values(equipment).filter(Boolean) as string[];
  const setCounts: Record<string, number> = {};
  
  equippedIds.forEach(id => {
    const item = getItemById(id);
    if (item && item.setId) {
      setCounts[item.setId] = (setCounts[item.setId] || 0) + 1;
    }
  });

  const activeBonuses: { setId: string; setName: string; activePieces: number; totalPieces: number; activeBonus: ItemStats; label: string }[] = [];

  Object.entries(setCounts).forEach(([setId, count]) => {
    const setDef = SETS_DATABASE.find(s => s.setId === setId);
    if (setDef) {
      // Find the highest bonus met
      const metBonuses = setDef.bonuses.filter(b => count >= b.required).sort((a, b) => b.required - a.required);
      if (metBonuses.length > 0) {
        const bestBonus = metBonuses[0];
        activeBonuses.push({
          setId,
          setName: setDef.setName,
          activePieces: count,
          totalPieces: setDef.pieces.length,
          activeBonus: bestBonus.stats,
          label: bestBonus.label
        });
      }
    }
  });

  return activeBonuses;
}

export function calculateTotalStats(equipment: EquipmentSlots): ItemStats {
  const totalStats: ItemStats = {
    attack: 0, defense: 0, speed: 0, mathBonus: 0, xpBonus: 0, coinBonus: 0, hpBonus: 0, critChance: 0
  };

  const equippedIds = Object.values(equipment).filter(Boolean) as string[];
  
  equippedIds.forEach(id => {
    const item = getItemById(id);
    if (item && item.stats) {
      Object.entries(item.stats).forEach(([key, value]) => {
        if (value) {
          (totalStats as any)[key] = ((totalStats as any)[key] || 0) + value;
        }
      });
    }
  });

  const setBonuses = calculateSetBonuses(equipment);
  setBonuses.forEach(bonus => {
    Object.entries(bonus.activeBonus).forEach(([key, value]) => {
      if (value) {
        (totalStats as any)[key] = ((totalStats as any)[key] || 0) + value;
      }
    });
  });

  return totalStats;
}

export function generateLoot(questRarity: string, playerClass: HeroClass): { itemId: string; quantity: number }[] {
  const loot: { itemId: string; quantity: number }[] = [];
  
  // Base chance to drop an item
  let dropChance = 0.3; // 30% chance
  let maxItems = 1;
  let allowedRarities = ['Common'];

  if (questRarity === 'Rare') {
    dropChance = 0.5;
    maxItems = 2;
    allowedRarities = ['Common', 'Rare'];
  } else if (questRarity === 'Epic') {
    dropChance = 0.8;
    maxItems = 2;
    allowedRarities = ['Rare', 'Epic'];
  } else if (questRarity === 'Legendary') {
    dropChance = 1.0;
    maxItems = 3;
    allowedRarities = ['Epic', 'Legendary'];
  }

  // Filter items that can drop
  const possibleItems = Object.values(ITEMS_DATABASE).filter(item => {
    // Only drop items of allowed rarities
    if (!allowedRarities.includes(item.rarity)) return false;
    
    // Only drop items for the player's class or generic items
    if (item.classRestriction && item.classRestriction.length > 0 && !item.classRestriction.includes(playerClass)) {
      return false;
    }

    return true;
  });

  if (possibleItems.length === 0) return loot;

  // Roll for items
  for (let i = 0; i < maxItems; i++) {
    if (Math.random() <= dropChance) {
      const randomItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
      
      // Determine quantity (materials/potions can drop in stacks)
      let quantity = 1;
      if (randomItem.type === 'material') {
        quantity = Math.floor(Math.random() * 3) + 1; // 1-3
      } else if (randomItem.type === 'potion') {
        quantity = Math.floor(Math.random() * 2) + 1; // 1-2
      }

      // Check if we already have this item in loot
      const existing = loot.find(l => l.itemId === randomItem.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        loot.push({ itemId: randomItem.id, quantity });
      }
    }
  }

  return loot;
}
