import { CompleteQuestPayload, BossBattlePayload, UpdateProfilePayload } from './api';
import { UserProfile, GuildData, GuildSummary, GuildLeaderboardEntry, GuildMessage, GuildPublicInfo } from '../types';

// Helper to get/set from localStorage
const getDB = () => {
    const db = localStorage.getItem('motiva_mock_db');
    if (db) return JSON.parse(db);
    return {
        users: {},
        guilds: {},
        guildMessages: {},
        inventory: {}
    };
};

const saveDB = (db: any) => {
    localStorage.setItem('motiva_mock_db', JSON.stringify(db));
};

const generateToken = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const handleMockRequest = async (action: string, data: any): Promise<any> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const db = getDB();
    const email = data.email?.toLowerCase();

    switch (action) {
        case 'register': {
            if (db.users[email]) {
                return { success: false, error: 'Email already exists', errorCode: 'EMAIL_EXISTS' };
            }
            const newUser = {
                email,
                password: data.password,
                username: data.username,
                grade: data.grade,
                heroClass: data.className || null,
                avatar: data.classEmoji || 'rogue',
                level: 1,
                currentXp: 0,
                nextLevelXp: 100,
                coins: 0,
                streakDays: 0,
                lastLoginDate: new Date().toISOString(),
                createdAt: new Date().toISOString(),
                hp: 100,
                maxHp: 100,
                completedQuests: 0,
                questHistory: [],
                inventory: [],
                achievements: [],
                themeColor: 'purple'
            };
            db.users[email] = newUser;
            db.inventory[email] = {
                items: [],
                equipment: { weapon: null, armor: null, helmet: null, accessory: null },
                dungeonProgress: {},
                dungeonEnergy: { current: 10, max: 10, nextRegenAt: null }
            };
            saveDB(db);
            return { success: true, message: 'Registered successfully', token: generateToken() };
        }
        case 'login':
        case 'loginFull': {
            const user = db.users[email];
            if (!user || user.password !== data.password) {
                return { success: false, error: 'Invalid credentials', errorCode: 'AUTH_FAILED' };
            }
            
            // Handle daily login logic
            const today = new Date().toISOString().split('T')[0];
            const lastLogin = user.lastLoginDate ? new Date(user.lastLoginDate).toISOString().split('T')[0] : null;
            let alreadyLoggedIn = today === lastLogin;
            
            if (!alreadyLoggedIn) {
                user.streakDays += 1;
                user.lastLoginDate = new Date().toISOString();
                user.hp = user.maxHp; // Restore HP daily
                saveDB(db);
            }

            return {
                success: true,
                token: generateToken(),
                user: user,
                progress: user,
                info: db.inventory[email] || {
                    items: [],
                    equipment: { weapon: null, armor: null, helmet: null, accessory: null },
                    dungeonProgress: {},
                    dungeonEnergy: { current: 10, max: 10, nextRegenAt: null }
                },
                quests: [],
                guild: user.guildId ? db.guilds[user.guildId] : null,
                daily: {
                    alreadyLoggedIn,
                    streakDays: user.streakDays,
                    hpRestored: !alreadyLoggedIn
                }
            };
        }
        case 'initSession': {
            const user = db.users[email];
            if (!user) {
                return { success: false, error: 'User not found', errorCode: 'AUTH_FAILED' };
            }
            
            // Check token
            if (data.token && user.token !== data.token) {
                // For now, we don't strictly enforce token in mock to avoid breaking existing sessions,
                // but we should ideally check it.
            }
            
            const today = new Date().toISOString().split('T')[0];
            const lastLogin = user.lastLoginDate ? new Date(user.lastLoginDate).toISOString().split('T')[0] : null;
            let alreadyLoggedIn = today === lastLogin;
            
            if (!alreadyLoggedIn) {
                user.streakDays += 1;
                user.lastLoginDate = new Date().toISOString();
                user.hp = user.maxHp;
                saveDB(db);
            }

            return {
                success: true,
                user: user,
                progress: user,
                info: db.inventory[email] || {
                    items: [],
                    equipment: { weapon: null, armor: null, helmet: null, accessory: null },
                    dungeonProgress: {},
                    dungeonEnergy: { current: 10, max: 10, nextRegenAt: null }
                },
                quests: [],
                guild: user.guildId ? db.guilds[user.guildId] : null,
                daily: {
                    alreadyLoggedIn,
                    streakDays: user.streakDays,
                    hpRestored: !alreadyLoggedIn
                }
            };
        }
        case 'completeQuest': {
            const user = db.users[email];
            if (!user) return { success: false, error: 'User not found' };
            
            const payload = data as CompleteQuestPayload;
            user.level = payload.newLevel;
            user.currentXp = payload.newXp;
            user.nextLevelXp = payload.newNextLevelXp;
            user.coins = payload.newCoins;
            user.hp = Math.max(0, user.hp - payload.hpLost);
            user.completedQuests += 1;
            
            if (!user.questHistory) user.questHistory = [];
            user.questHistory.push(payload.questHistoryEntry);
            
            if (payload.habitStreaks) {
                user.habitStreaks = payload.habitStreaks;
            }
            
            saveDB(db);
            return { success: true, loot: [] };
        }
        case 'updateProfile': {
            const user = db.users[email];
            if (!user) return { success: false, error: 'User not found' };
            
            Object.assign(user, data);
            saveDB(db);
            return { success: true };
        }
        case 'addPurchase': {
            const user = db.users[email];
            if (!user) return { success: false, error: 'User not found' };
            
            if (user.coins < data.price) {
                return { success: false, error: 'Insufficient funds', errorCode: 'INSUFFICIENT_FUNDS' };
            }
            
            user.coins -= data.price;
            if (!user.inventory) user.inventory = [];
            user.inventory.push(data.itemId);
            
            saveDB(db);
            return { success: true, newBalance: user.coins };
        }
        case 'getLeaderboard': {
            const users = Object.values(db.users) as any[];
            const sorted = users.sort((a, b) => b.level - a.level || b.currentXp - a.currentXp).slice(0, 100);
            return { success: true, data: sorted };
        }
        case 'getInventory': {
            const inv = db.inventory[email] || {
                items: [],
                equipment: { weapon: null, armor: null, helmet: null, accessory: null },
                dungeonProgress: {},
                dungeonEnergy: { current: 10, max: 10, nextRegenAt: null }
            };
            return { success: true, ...inv };
        }
        case 'addToInventory': {
            const inv = db.inventory[email];
            if (!inv) return { success: false, error: 'Inventory not found' };
            
            const items = data.items as { itemId: string; quantity: number }[];
            items.forEach(item => {
                const existing = inv.items.find((i: any) => i.itemId === item.itemId);
                if (existing) {
                    existing.quantity += item.quantity;
                } else {
                    inv.items.push({ itemId: item.itemId, quantity: item.quantity, obtainedAt: new Date().toISOString() });
                }
            });
            
            saveDB(db);
            return { success: true };
        }
        case 'equipItem': {
            const inv = db.inventory[email];
            if (!inv) return { success: false, error: 'Inventory not found' };
            
            // Remove from items
            const itemIndex = inv.items.findIndex((i: any) => i.itemId === data.itemId);
            if (itemIndex !== -1) {
                if (inv.items[itemIndex].quantity > 1) {
                    inv.items[itemIndex].quantity -= 1;
                } else {
                    inv.items.splice(itemIndex, 1);
                }
            }
            
            // If something is already equipped, put it back to items
            const currentEquipped = inv.equipment[data.slot];
            if (currentEquipped) {
                const existing = inv.items.find((i: any) => i.itemId === currentEquipped);
                if (existing) {
                    existing.quantity += 1;
                } else {
                    inv.items.push({ itemId: currentEquipped, quantity: 1, obtainedAt: new Date().toISOString() });
                }
            }
            
            inv.equipment[data.slot] = data.itemId;
            saveDB(db);
            return { success: true };
        }
        case 'unequipItem': {
            const inv = db.inventory[email];
            if (!inv) return { success: false, error: 'Inventory not found' };
            
            const currentEquipped = inv.equipment[data.slot];
            if (currentEquipped) {
                const existing = inv.items.find((i: any) => i.itemId === currentEquipped);
                if (existing) {
                    existing.quantity += 1;
                } else {
                    inv.items.push({ itemId: currentEquipped, quantity: 1, obtainedAt: new Date().toISOString() });
                }
            }
            
            inv.equipment[data.slot] = null;
            saveDB(db);
            return { success: true };
        }
        case 'usePotion': {
            const inv = db.inventory[email];
            if (!inv) return { success: false, error: 'Inventory not found' };
            
            const itemIndex = inv.items.findIndex((i: any) => i.itemId === data.itemId);
            if (itemIndex !== -1) {
                if (inv.items[itemIndex].quantity > 1) {
                    inv.items[itemIndex].quantity -= 1;
                } else {
                    inv.items.splice(itemIndex, 1);
                }
                saveDB(db);
                return { success: true };
            }
            return { success: false, error: 'Item not found' };
        }
        case 'getGuildsList': {
            return { success: true, data: Object.values(db.guilds) };
        }
        case 'getMyGuild': {
            const user = db.users[email];
            if (!user || !user.guildId) return { success: true, data: null };
            return { success: true, data: db.guilds[user.guildId] };
        }
        case 'createGuild': {
            const user = db.users[email];
            if (!user) return { success: false, error: 'User not found' };
            
            const guildId = 'guild_' + Date.now();
            const newGuild = {
                id: guildId,
                name: data.name,
                description: data.description,
                emblem: data.emblem,
                level: 1,
                totalXp: 0,
                reputation: 0,
                isOpen: data.isOpen,
                createdAt: new Date().toISOString(),
                members: [{
                    email: user.email,
                    username: user.username,
                    role: 'leader',
                    joinedAt: new Date().toISOString(),
                    weeklyXp: 0,
                    totalXp: 0
                }],
                joinRequests: [],
                treasury: 0,
                achievements: [],
                activeQuests: []
            };
            
            db.guilds[guildId] = newGuild;
            user.guildId = guildId;
            saveDB(db);
            
            return { success: true, guildId, message: 'Guild created' };
        }
        case 'joinGuild': {
            const user = db.users[email];
            const guild = db.guilds[data.guildId];
            if (!user || !guild) return { success: false, error: 'Not found' };
            
            guild.members.push({
                email: user.email,
                username: user.username,
                role: 'member',
                joinedAt: new Date().toISOString(),
                weeklyXp: 0,
                totalXp: 0
            });
            user.guildId = guild.id;
            saveDB(db);
            
            return { success: true, message: 'Joined guild' };
        }
        case 'leaveGuild': {
            const user = db.users[email];
            if (!user || !user.guildId) return { success: false, error: 'Not in a guild' };
            
            const guild = db.guilds[user.guildId];
            if (guild) {
                guild.members = guild.members.filter((m: any) => m.email !== email);
                if (guild.members.length === 0) {
                    delete db.guilds[user.guildId];
                }
            }
            user.guildId = null;
            saveDB(db);
            
            return { success: true, message: 'Left guild' };
        }
        case 'getGuildLeaderboard':
            return { success: true, data: [] };
        case 'getGuildChat':
            return { success: true, data: [] };
        case 'getAdminData':
            return { success: true, data: [] };
        default:
            console.log(`[Mock API] Unhandled action: ${action}`, data);
            return { success: true, message: 'Mock response' };
    }
};
