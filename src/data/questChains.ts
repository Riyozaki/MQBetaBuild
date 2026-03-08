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
    // --- GRADE 5 ---
    {
        id: 'chain_math_5',
        name: 'Путь Математика',
        description: 'Основы математики 5 класса',
        icon: '🔢',
        category: 'Math',
        gradeGroup: 'grade5',
        quests: [
            { stepNumber: 1, questId: 'grade5_001', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade5_002', requiresPrevious: true, bonusXp: 10, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade5_003', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 4, questId: 'grade5_004', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 5, questId: 'grade5_005', requiresPrevious: true, bonusXp: 50, bonusCoins: 25 },
        ],
        finalReward: { xp: 300, coins: 100, title: 'Юный Математик' },
    },
    {
        id: 'chain_russian_5',
        name: 'Путь Грамотея',
        description: 'Основы русского языка 5 класса',
        icon: '📝',
        category: 'Russian',
        gradeGroup: 'grade5',
        quests: [
            { stepNumber: 1, questId: 'grade5_011', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade5_012', requiresPrevious: true, bonusXp: 10, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade5_013', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 4, questId: 'grade5_014', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 5, questId: 'grade5_015', requiresPrevious: true, bonusXp: 50, bonusCoins: 25 },
        ],
        finalReward: { xp: 300, coins: 100, title: 'Грамотей' },
    },
    {
        id: 'chain_history_5',
        name: 'Путь Историка',
        description: 'Древний мир',
        icon: '🏛️',
        category: 'History',
        gradeGroup: 'grade5',
        quests: [
            { stepNumber: 1, questId: 'grade5_031', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade5_032', requiresPrevious: true, bonusXp: 10, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade5_033', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 4, questId: 'grade5_034', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 5, questId: 'grade5_035', requiresPrevious: true, bonusXp: 50, bonusCoins: 25 },
        ],
        finalReward: { xp: 300, coins: 100, title: 'Исследователь Древности' },
    },

    // --- GRADE 6-7 ---
    {
        id: 'chain_math_67',
        name: 'Путь Математика',
        description: 'Дроби и проценты',
        icon: '➗',
        category: 'Math',
        gradeGroup: 'grade67',
        quests: [
            { stepNumber: 1, questId: 'grade67_001', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade67_002', requiresPrevious: true, bonusXp: 15, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade67_003', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 4, questId: 'grade67_004', requiresPrevious: true, bonusXp: 45, bonusCoins: 20 },
            { stepNumber: 5, questId: 'grade67_005', requiresPrevious: true, bonusXp: 70, bonusCoins: 35 },
        ],
        finalReward: { xp: 400, coins: 150, title: 'Знаток Дробей' },
    },
    {
        id: 'chain_russian_67',
        name: 'Путь Грамотея',
        description: 'Синтаксис и пунктуация',
        icon: '✍️',
        category: 'Russian',
        gradeGroup: 'grade67',
        quests: [
            { stepNumber: 1, questId: 'grade67_011', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade67_012', requiresPrevious: true, bonusXp: 15, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade67_013', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 4, questId: 'grade67_014', requiresPrevious: true, bonusXp: 45, bonusCoins: 20 },
            { stepNumber: 5, questId: 'grade67_015', requiresPrevious: true, bonusXp: 70, bonusCoins: 35 },
        ],
        finalReward: { xp: 400, coins: 150, title: 'Мастер Запятых' },
    },
    {
        id: 'chain_history_67',
        name: 'Путь Историка',
        description: 'Средние века',
        icon: '🏰',
        category: 'History',
        gradeGroup: 'grade67',
        quests: [
            { stepNumber: 1, questId: 'grade67_031', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade67_032', requiresPrevious: true, bonusXp: 15, bonusCoins: 5 },
            { stepNumber: 3, questId: 'grade67_033', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 4, questId: 'grade67_034', requiresPrevious: true, bonusXp: 45, bonusCoins: 20 },
            { stepNumber: 5, questId: 'grade67_035', requiresPrevious: true, bonusXp: 70, bonusCoins: 35 },
        ],
        finalReward: { xp: 400, coins: 150, title: 'Рыцарь Истории' },
    },

    // --- GRADE 8-9 ---
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
    {
        id: 'chain_biology_89',
        name: 'Путь Биолога',
        description: 'Анатомия и физиология человека',
        icon: '🧬',
        category: 'Science',
        gradeGroup: 'grade89',
        quests: [
            { stepNumber: 1, questId: 'grade89_041', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade89_042', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 3, questId: 'grade89_043', requiresPrevious: true, bonusXp: 40, bonusCoins: 20 },
            { stepNumber: 4, questId: 'grade89_044', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 5, questId: 'grade89_045', requiresPrevious: true, bonusXp: 100, bonusCoins: 50 },
        ],
        finalReward: { xp: 500, coins: 200, title: 'Знаток Анатомии' },
    },
    {
        id: 'chain_it_89',
        name: 'Путь Программиста',
        description: 'Основы алгоритмов и Python',
        icon: '💻',
        category: 'IT',
        gradeGroup: 'grade89',
        quests: [
            { stepNumber: 1, questId: 'grade89_091', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade89_092', requiresPrevious: true, bonusXp: 20, bonusCoins: 10 },
            { stepNumber: 3, questId: 'grade89_093', requiresPrevious: true, bonusXp: 40, bonusCoins: 20 },
            { stepNumber: 4, questId: 'grade89_094', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 5, questId: 'grade89_095', requiresPrevious: true, bonusXp: 100, bonusCoins: 50 },
        ],
        finalReward: { xp: 500, coins: 200, title: 'Кодер' },
    },

    // --- GRADE 10-11 ---
    {
        id: 'chain_ege_math',
        name: 'Путь к ЕГЭ (Математика)',
        description: 'Сложные задачи профильного уровня',
        icon: '🎓',
        category: 'Math',
        gradeGroup: 'grade1011',
        quests: [
            { stepNumber: 1, questId: 'grade1011_001', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade1011_002', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 3, questId: 'grade1011_003', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 4, questId: 'grade1011_004', requiresPrevious: true, bonusXp: 90, bonusCoins: 45 },
            { stepNumber: 5, questId: 'grade1011_005', requiresPrevious: true, bonusXp: 150, bonusCoins: 75 },
        ],
        finalReward: { xp: 800, coins: 300, title: 'Стобалльник' },
    },
    {
        id: 'chain_ege_russian',
        name: 'Путь к ЕГЭ (Русский)',
        description: 'Орфоэпия, паронимы и сочинение',
        icon: '📚',
        category: 'Russian',
        gradeGroup: 'grade1011',
        quests: [
            { stepNumber: 1, questId: 'grade1011_011', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade1011_012', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 3, questId: 'grade1011_013', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 4, questId: 'grade1011_014', requiresPrevious: true, bonusXp: 90, bonusCoins: 45 },
            { stepNumber: 5, questId: 'grade1011_015', requiresPrevious: true, bonusXp: 150, bonusCoins: 75 },
        ],
        finalReward: { xp: 800, coins: 300, title: 'Мастер Слова' },
    },
    {
        id: 'chain_ege_social',
        name: 'Путь к ЕГЭ (Общество)',
        description: 'Экономика, право, политика',
        icon: '⚖️',
        category: 'Social',
        gradeGroup: 'grade1011',
        quests: [
            { stepNumber: 1, questId: 'grade1011_081', requiresPrevious: false, bonusXp: 0, bonusCoins: 0 },
            { stepNumber: 2, questId: 'grade1011_082', requiresPrevious: true, bonusXp: 30, bonusCoins: 15 },
            { stepNumber: 3, questId: 'grade1011_083', requiresPrevious: true, bonusXp: 60, bonusCoins: 30 },
            { stepNumber: 4, questId: 'grade1011_084', requiresPrevious: true, bonusXp: 90, bonusCoins: 45 },
            { stepNumber: 5, questId: 'grade1011_085', requiresPrevious: true, bonusXp: 150, bonusCoins: 75 },
        ],
        finalReward: { xp: 800, coins: 300, title: 'Гражданин' },
    }
];
