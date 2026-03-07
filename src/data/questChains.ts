import { GradeGroup } from '../types';

export interface QuestChain {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: string;
    gradeGroup: GradeGroup;
    quests: ChainStep[];
    finalReward: {
        xp: number;
        coins: number;
        title?: string;
        skinId?: string;
        achievement?: string;
    };
}

export interface ChainStep {
    stepNumber: number;
    questId: string;
    requiresPrevious: boolean;
    bonusXp: number;
    bonusCoins: number;
}

export const QUEST_CHAINS: QuestChain[] = [
    {
        id: 'chain_algebra_mastery',
        name: 'Путь Алгебры',
        description: 'Пройди 5 уровней алгебры от основ до мастерства',
        icon: '📐',
        category: 'Math',
        gradeGroup: 'grade89',
        quests: [
            { stepNumber: 1, questId: 'grade89_001', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade89_002', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 3, questId: 'grade89_003', requiresPrevious: true, bonusXp: 40, bonusCoins: 20 },
            { stepNumber: 4, questId: 'grade89_004', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 5, questId: 'grade89_005', requiresPrevious: true, bonusXp: 100, bonusCoins: 50 },
        ],
        finalReward: {
            xp: 500,
            coins: 200,
            title: 'Мастер Алгебры',
            achievement: 'ach_algebra_master',
        },
    },
];
