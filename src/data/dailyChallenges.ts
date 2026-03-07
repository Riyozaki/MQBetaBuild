export interface DailyChallengeTemplate {
    id: string;
    type: 'speed_run' | 'perfect_score' | 'category_focus' | 'endurance' | 'streak_bonus';
    title: string;
    description: string;
    icon: string;
    condition: {
        questCount?: number;
        category?: string;
        minScore?: number;
        timeLimit?: number;
    };
    rewards: {
        xp: number;
        coins: number;
        bonusItem?: string;
    };
}

export const DAILY_CHALLENGE_POOL: DailyChallengeTemplate[] = [
    {
        id: 'dc_speed_demon',
        type: 'speed_run',
        title: 'Скоростной демон',
        description: 'Пройди 3 квеста за 15 минут',
        icon: '⚡',
        condition: { questCount: 3, timeLimit: 15 },
        rewards: { xp: 150, coins: 75 },
    },
    {
        id: 'dc_perfectionist',
        type: 'perfect_score',
        title: 'Перфекционист',
        description: 'Получи 100% в любых 2 квестах',
        icon: '💎',
        condition: { questCount: 2, minScore: 100 },
        rewards: { xp: 200, coins: 100 },
    },
    {
        id: 'dc_math_focus',
        type: 'category_focus',
        title: 'День математики',
        description: 'Пройди 4 квеста по математике',
        icon: '🔢',
        condition: { questCount: 4, category: 'Math' },
        rewards: { xp: 180, coins: 90 },
    },
    {
        id: 'dc_endurance',
        type: 'endurance',
        title: 'Марафонец',
        description: 'Пройди 6 квестов за день',
        icon: '🏃',
        condition: { questCount: 6 },
        rewards: { xp: 250, coins: 120, bonusItem: 'boost_xp2x' },
    },
    {
        id: 'dc_streak_master',
        type: 'streak_bonus',
        title: 'Мастер серии',
        description: 'Пройди 3 квеста подряд без ошибок',
        icon: '🔥',
        condition: { questCount: 3, minScore: 80 },
        rewards: { xp: 200, coins: 100 },
    },
];

function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

export function getDailyChallenges(date: string): DailyChallengeTemplate[] {
    const seed = hashString(date);
    const shuffled = [...DAILY_CHALLENGE_POOL].sort((a, b) => {
        return hashString(a.id + seed.toString()) - hashString(b.id + seed.toString());
    });
    return shuffled.slice(0, 3);
}
