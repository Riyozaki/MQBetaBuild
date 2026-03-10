import { DungeonData } from '../types';

export const DUNGEONS_DB: DungeonData[] = [
    {
        id: 'goblin_cave',
        name: 'Пещера Гоблинов',
        description: 'Сырая пещера, полная мелких, но опасных гоблинов.',
        icon: 'skull',
        requiredLevel: 1,
        gradeGroup: 'grade5',
        floors: [
            {
                floor: 1,
                isBossFloor: false,
                enemies: [
                    { id: 'goblin_1', name: 'Гоблин-разведчик', icon: 'goblin', hp: 20, attack: 5, defense: 2, mathDifficulty: 'easy', xpReward: 10, coinReward: 5, isBoss: false },
                    { id: 'goblin_2', name: 'Гоблин-воин', icon: 'goblin', hp: 30, attack: 8, defense: 3, mathDifficulty: 'easy', xpReward: 15, coinReward: 8, isBoss: false }
                ]
            },
            {
                floor: 2,
                isBossFloor: true,
                enemies: [
                    { id: 'goblin_boss', name: 'Король Гоблинов', icon: 'goblin_boss', hp: 80, attack: 15, defense: 5, mathDifficulty: 'medium', xpReward: 50, coinReward: 20, isBoss: true }
                ]
            }
        ],
        rewards: {
            xp: 100,
            coins: 50,
            guaranteedDrop: 'goblin_ear'
        }
    }
];
