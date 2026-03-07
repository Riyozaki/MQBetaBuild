import { UserProfile } from '../types';

export interface QuestRewardCalculation {
    baseXp: number;
    baseCoins: number;
    scoreMultiplier: number;
    streakMultiplier: number;
    difficultyMultiplier: number;
    classBonus: number;
    guildBonus: number;
    firstTimeBonus: number;
    chainBonus: number;
    criticalHit: boolean;
    bonusDrop: string | null;
}

function isClassMatch(heroClass: string | undefined, category: string): boolean {
    if (!heroClass) return false;
    const map: Record<string, string[]> = {
        warrior: ['Sport', 'History'],
        mage: ['Math', 'Science', 'IT'],
        ranger: ['Ecology', 'Lang'],
        healer: ['Literature', 'Social', 'Self']
    };
    return map[heroClass]?.includes(category) || false;
}

function isFirstTime(user: UserProfile, questId: string | number): boolean {
    return !user.questHistory?.some(q => q.questId === questId);
}

function isPartOfChain(questId: string | number): boolean {
    // Mock implementation for now
    return false;
}

function getRandomDrop(): string {
    const drops = ['potion_hp', 'boost_xp', 'scroll_knowledge'];
    return drops[Math.floor(Math.random() * drops.length)];
}

export function calculateReward(quest: any, score: number, user: UserProfile): QuestRewardCalculation {
    const base = { xp: quest.xp || 0, coins: quest.coins || 0 };
    
    let scoreMultiplier = 0.5 + (score / 100) * 1.0;
    let streakMultiplier = 1.0 + Math.min((user.streakDays || 0) * 0.1, 1.0);
    let criticalHit = Math.random() < 0.10;
    let bonusDrop = Math.random() < 0.05 ? getRandomDrop() : null;
    
    return {
        baseXp: base.xp,
        baseCoins: base.coins,
        scoreMultiplier,
        streakMultiplier,
        difficultyMultiplier: 1.0,
        classBonus: isClassMatch(user.heroClass, quest.category) ? 0.1 : 0,
        guildBonus: user.guildId ? 0.05 : 0,
        firstTimeBonus: isFirstTime(user, quest.id) ? 0.5 : 0,
        chainBonus: isPartOfChain(quest.id) ? 0.2 : 0,
        criticalHit,
        bonusDrop,
    };
}
