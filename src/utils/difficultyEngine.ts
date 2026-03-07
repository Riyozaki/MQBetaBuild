export type DifficultyLevel = 'easy' | 'normal' | 'hard' | 'expert';

interface DifficultyProfile {
    category: string;
    recentScores: number[];
    averageScore: number;
    questsCompleted: number;
    currentDifficulty: DifficultyLevel;
}

export function calculateDifficulty(profile: DifficultyProfile): DifficultyLevel {
    const avg = profile.averageScore;
    
    if (profile.questsCompleted < 3) return 'easy';
    
    if (avg >= 90) return 'expert';
    if (avg >= 70) return 'hard';
    if (avg >= 50) return 'normal';
    return 'easy';
}

export function adjustTaskForDifficulty(task: any, difficulty: DifficultyLevel): any {
    switch (difficulty) {
        case 'easy':
            if (task.type === 'quiz' && task.options) {
                return { ...task, options: task.options.slice(0, 3), hint: true };
            }
            if (task.type === 'timer_challenge' && task.timerSeconds) {
                return { ...task, timerSeconds: task.timerSeconds * 2 };
            }
            break;
        case 'expert':
            if (task.type === 'quiz') {
                return { ...task, shuffleOptions: true, noHint: true };
            }
            if (task.type === 'timer_challenge' && task.timerSeconds) {
                return { ...task, timerSeconds: Math.floor(task.timerSeconds * 0.5) };
            }
            break;
    }
    return task;
}
