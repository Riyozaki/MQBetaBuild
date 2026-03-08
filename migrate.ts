import fs from 'fs';

let content = fs.readFileSync('src/data/defaultQuests.ts', 'utf-8');

// Replace `id: XX,` with `id: "default_0XX",`
content = content.replace(/id:\s*(\d+)\s*,/g, (match, p1) => {
    const numStr = p1.padStart(3, '0');
    return `id: "default_${numStr}",`;
});

// Fix Quest #23
content = content.replace(/id: "default_023", title: "Стихотворные размеры", description: "Ритм поэзии", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Legendary", xp: 60, coins: 50/, 
'id: "default_023", title: "Стихотворные размеры", description: "Ритм поэзии", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Rare", xp: 40, coins: 30');

// Fix Quest #48
content = content.replace(/{left: 'Менделеев', right: 'Таблица элементов'}/, "{left: 'Менделеев', right: 'Периодический закон'}");

// Fix Quest #93
content = content.replace(/acceptableAnswers: \["часы", "время", "жизнь"\]/, 'acceptableAnswers: ["время"]');

// Fix Quest #70
content = content.replace(/ordering: \["Measurable", "Specific", "Achievable"\]/, 'ordering: ["Measurable", "Specific", "Achievable", "Relevant", "Time-bound"]');
content = content.replace(/correctOrder: \["Specific", "Measurable", "Achievable"\]/, 'correctOrder: ["Specific", "Measurable", "Achievable", "Relevant", "Time-bound"]');

// Fix Quest #38
content = content.replace(/"Тяжелее ли 1кг ваты чем 1кг железа\?"/, '"1кг ваты весит БОЛЬШЕ чем 1кг железа. Верно?"');

// Fix Habit #55
content = content.replace(/id: "default_055", title: "Зарядка", description: "10 минут активности", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 15, coins: 10/,
'id: "default_055", title: "Зарядка", description: "10 минут активности", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 10, coins: 5');

// Fix Habit #65
content = content.replace(/id: "default_065", title: "Уборка", description: "Наведи порядок", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 15, coins: 10/,
'id: "default_065", title: "Уборка", description: "Наведи порядок", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 10, coins: 5');

// Fix Habit #69
content = content.replace(/id: "default_069", title: "Режим сна", description: "Ложись вовремя", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Rare", xp: 40, coins: 30/,
'id: "default_069", title: "Режим сна", description: "Ложись вовремя", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 15, coins: 10');

fs.writeFileSync('src/data/defaultQuests.ts', content);

// Now update campaignData.ts
let campaignContent = fs.readFileSync('src/data/campaignData.ts', 'utf-8');
campaignContent = campaignContent.replace(/\[([^\]]+)\]/g, (match, p1) => {
    if (match.includes('grade')) {
        const parts = p1.split(',').map((p: string) => {
            const trimmed = p.trim();
            if (/^\d+$/.test(trimmed)) {
                return `"default_${trimmed.padStart(3, '0')}"`;
            }
            return trimmed;
        });
        return `[${parts.join(', ')}]`;
    }
    return match;
});

// Fix day 15 placeholder in campaignData.ts
campaignContent = campaignContent.replace(/questIds: \[65, 55, 1\] \/\/ Placeholder quests for now/, 'questIds: ["default_065", "default_055", "default_001"] // Placeholder quests for now');

fs.writeFileSync('src/data/campaignData.ts', campaignContent);
