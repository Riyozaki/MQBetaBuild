import { Task, TaskType } from '../types';

// Fisher-Yates shuffle
const shuffle = (array: any[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

// Helper for task creation
const t = (type: TaskType, q: string, correct: string, opts?: any): Omit<Task, 'id'> => {
    const task: any = {
        type,
        question: q,
        correctAnswer: correct,
        ...opts
    };

    // Auto-generate shuffled items for ordering tasks if not provided
    if (type === 'ordering' && task.correctOrder && !task.shuffledItems) {
        task.shuffledItems = shuffle(task.correctOrder);
    }

    return task;
};

const questsData = [
    // --- DAY 1: MATH ---
    { id: "default_001", title: "Быстрый счет: Таблица x7", description: "Вспомни таблицу умножения", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Common", xp: 15, coins: 10, tasks: [
        t('timer_challenge', "7 × 6 = ?", "42", { timerSeconds: 15 }),
        t('timer_challenge', "7 × 8 = ?", "56", { timerSeconds: 15 }),
        t('timer_challenge', "7 × 9 = ?", "63", { timerSeconds: 15 })
    ]},
    { id: "default_055", title: "Спорт: Зарядка", description: "Разминка утром", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 10, coins: 5, tasks: [
        t('checklist', "Утро", "", { checklistItems: [{id:'1', label: '10 приседаний'}, {id:'2', label: 'Потягивания'}, {id:'3', label: '10 наклонов'}]}),
        t('quiz', "Зачем делать разминку?", "", { options: ["Разогреть мышцы и суставы", "Чтобы устать до уроков", "Это необязательно"], correctIndex: 0 })
    ]},
    { id: "default_065", title: "Уборка", description: "Наведи порядок", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 10, coins: 5, tasks: [
        t('checklist', "Порядок", "", { checklistItems: [{id:'1', label: 'Убрал рабочий стол'}, {id:'2', label: 'Разложил вещи по местам'}, {id:'3', label: 'Протёр пыль'}]}),
        t('quiz', "Метод 5S (порядок на рабочем месте) начинается с:", "", { options: ["Сортировки — убрать лишнее", "Покупки новых полок", "Уборки раз в месяц"], correctIndex: 0 })
    ]},

    // --- DAY 2: DISCIPLINE ---
    { id: "default_066", title: "Режим дня", description: "Построй свой график", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('checklist', "План", "", { checklistItems: [{id:'1', label: 'Собрал рюкзак с вечера'}, {id:'2', label: 'Одежда на завтра готова'}, {id:'3', label: 'Завел будильник'}] })
    ]},
    { id: "default_075", title: "Дневник благодарности", description: "Позитивное мышление", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('text_input', "Напиши одну вещь, за которую ты благодарен сегодня", "*", {})
    ]},
    { id: "default_056", title: "Спорт: Вода", description: "Гидратация", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 15, coins: 10, tasks: [
        t('checklist', "Вода", "", { checklistItems: [{id:'1', label: 'Стакан утром'}, {id:'2', label: 'Стакан в школе/днем'}, {id:'3', label: 'Стакан вечером'}]})
    ]},

    // --- DAY 3: MATH & ECO ---
    { id: "default_002", title: "Дроби: Сложение", description: "Сложи простые дроби", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('quiz', "1/2 + 1/4 = ?", "", { options: ["3/4", "2/6", "1/6", "2/4"], correctIndex: 0 }),
        t('number_input', "Числитель 3/5 + 1/5?", "4", {})
    ]},
    { id: "default_003", title: "Проценты: Скидки", description: "Посчитай выгоду", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('timer_challenge', "Цена 100, скидка 20%. Итог?", "80", { timerSeconds: 20 }),
        t('timer_challenge', "50% от 400?", "200", { timerSeconds: 15 })
    ]},
    { id: "default_057", title: "Лесная Экология", description: "Раздельный сбор", category: "ecology", categoryLabel: "Экология", categoryIcon: "🌱", rarity: "Common", xp: 25, coins: 15, tasks: [
        t('matching', "Сортировка", "", { pairs: [{left: 'Батарейки', right: 'Опасные отходы'}, {left: 'Бумага', right: 'Макулатура'}, {left: 'Яблоко', right: 'Компост'}] }),
        t('quiz', "Сколько разлагается пластик?", "", { options: ["50 лет", "100 лет", "400+ лет", "1 год"], correctIndex: 2 })
    ]},

    // --- DAY 4: RUSSIAN ---
    { id: "default_011", title: "Жи/Ши", description: "Основы правописания", category: "russian", categoryLabel: "Русский язык", categoryIcon: "📝", rarity: "Common", xp: 15, coins: 10, tasks: [
        t('quiz', "Какое слово верное?", "", { options: ["Шина", "Шына"], correctIndex: 0 }),
        t('quiz', "Какое слово верное?", "", { options: ["Жизнь", "Жызнь"], correctIndex: 0 })
    ]},
    { id: "default_021", title: "Ударения", description: "Говори правильно", category: "russian", categoryLabel: "Русский язык", categoryIcon: "📝", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('quiz', "Правильное ударение?", "", { options: ["звонИт", "звОнит"], correctIndex: 0 }),
        t('quiz', "Правильное ударение?", "", { options: ["тОрты", "тортЫ"], correctIndex: 0 }),
        t('quiz', "Правильное ударение?", "", { options: ["красИвее", "красивЕе"], correctIndex: 0 })
    ]},
    { id: "default_067", title: "Скорочтение", description: "Работа с текстом", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('timer_challenge', "Прочитай 1 страницу книги за 2 минуты", "готово", { timerSeconds: 120, acceptableAnswers: ["готово", "да", "сделал"] }),
        t('quiz', "Что помогает запомнить прочитанное?", "", { options: ["Пересказ своими словами", "Читать как можно быстрее", "Пропускать сложные слова"], correctIndex: 0 }),
        t('quiz', "Главная мысль текста — это:", "", { options: ["Основная идея, которую хотел донести автор", "Первое предложение", "Последнее слово"], correctIndex: 0 })
    ]},

    // --- DAY 5: SCIENCE ---
    { id: "default_037", title: "Фотосинтез", description: "Как дышат растения", category: "science", categoryLabel: "Наука", categoryIcon: "🔬", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('ordering', "Процесс", "", { shuffledItems: ["Солнце светит", "Лист поглощает свет", "Выделяется кислород"], correctOrder: ["Солнце светит", "Лист поглощает свет", "Выделяется кислород"] }),
        t('quiz', "Что поглощают растения?", "", { options: ["Кислород", "Углекислый газ", "Азот"], correctIndex: 1 })
    ]},
    { id: "default_081", title: "Агрегатные состояния", description: "Физика воды", category: "science", categoryLabel: "Наука", categoryIcon: "🔬", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('matching', "Состояния", "", { pairs: [{left: 'Лёд', right: 'Твердое'}, {left: 'Пар', right: 'Газообразное'}, {left: 'Вода', right: 'Жидкое'}] }),
        t('number_input', "Температура кипения воды (С)?", "100", {})
    ]},
    { id: "default_004", title: "Геометрия: Площадь", description: "Найди площадь фигур", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('number_input', "Прямоугольник 5x8. Площадь?", "40", {}),
        t('number_input', "Квадрат со стороной 6. Площадь?", "36", {})
    ]},

    // --- DAY 6: PHYSICS & SPORT ---
    { id: "default_038", title: "Сила и Движение", description: "Законы Ньютона", category: "science", categoryLabel: "Наука", categoryIcon: "🔬", rarity: "Epic", xp: 45, coins: 35, tasks: [
        t('quiz', "Формула силы?", "", { options: ["F = m*a", "F = m/a", "F = m+a"], correctIndex: 0 }),
        t('quiz', "Сила притяжения Земли - это...", "", { options: ["Трение", "Гравитация", "Инерция"], correctIndex: 1 }),
        t('yes_no', "1кг ваты весит БОЛЬШЕ чем 1кг железа. Верно?", "no")
    ]},
    { id: "default_058", title: "Выносливость: Планка", description: "Укрепи кор", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('timer_challenge', "Стой в планке!", "да", { timerSeconds: 45, acceptableAnswers: ["да", "сделал", "готово"] }),
        t('quiz', "Какие мышцы работают в планке?", "", { options: ["Пресс, спина, плечи", "Только бицепсы", "Только ноги"], correctIndex: 0 }),
        t('quiz', "Как правильно стоять в планке?", "", { options: ["Тело ровное как доска", "Провисать животом", "Поднять таз высоко"], correctIndex: 0 })
    ]},
    { id: "default_005", title: "Уравнения: Найти X", description: "Реши линейные уравнения", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Epic", xp: 50, coins: 40, tasks: [
        t('timer_challenge', "2x + 10 = 20. x=?", "5", { timerSeconds: 30 }),
        t('timer_challenge', "3x - 5 = 10. x=?", "5", { timerSeconds: 30 })
    ]},

    // --- DAY 7: ENGLISH & LOGIC ---
    { id: "default_029", title: "Irregular Verbs", description: "Неправильные глаголы", category: "english", categoryLabel: "Английский", categoryIcon: "🇬🇧", rarity: "Rare", xp: 30, coins: 25, tasks: [
        t('matching', "Forms", "", { pairs: [{left: 'Go', right: 'Went'}, {left: 'See', right: 'Saw'}, {left: 'Buy', right: 'Bought'}] }),
        t('fill_blanks', "Complete the sentence", "", { textWithBlanks: "I ___ my homework yesterday.", blankAnswers: ["did"] })
    ]},
    { id: "default_093", title: "Загадки Мудреца", description: "Тренировка ума", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Epic", xp: 40, coins: 30, tasks: [
        t('text_input', "Что идет, не двигаясь с места?", "время", { acceptableAnswers: ["время"] }),
        t('quiz', "У отца Мэри 5 дочерей: Чача, Чече, Чичи, Чочо. Как зовут пятую?", "", { options: ["Чучу", "Мэри", "Чича"], correctIndex: 1 })
    ]},
    { id: "default_006", title: "Логика: Ряды чисел", description: "Продолжи последовательность", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('quiz', "2, 4, 8, 16...?", "", { options: ["32", "24", "30"], correctIndex: 0 }),
        t('quiz', "1, 1, 2, 3, 5...?", "", { options: ["8", "7", "6"], correctIndex: 0 })
    ]},

    // --- DAY 8: MULTITASKING ---
    { id: "default_059", title: "Координация: Берпи", description: "Сложное упражнение", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('timer_challenge', "Сделай 5 берпи", "да", { timerSeconds: 60, acceptableAnswers: ["да", "готово", "сделал"] }),
        t('quiz', "Берпи тренирует:", "", { options: ["Выносливость и координацию", "Только гибкость", "Только зрение"], correctIndex: 0 }),
        t('quiz', "Нормальный пульс в покое у подростка:", "", { options: ["60-100 уд/мин", "20-30 уд/мин", "200+ уд/мин"], correctIndex: 0 }),
        t('matching', "Упражнения и качества", "", { pairs: [{left: 'Планка', right: 'Сила кора'}, {left: 'Бег', right: 'Выносливость'}, {left: 'Растяжка', right: 'Гибкость'}] })
    ]},
    { id: "default_012", title: "Тся/Ться", description: "Мягкий знак в глаголах", category: "russian", categoryLabel: "Русский язык", categoryIcon: "📝", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('quiz', "Он (что делает?)", "", { options: ["Учится", "Учиться"], correctIndex: 0 }),
        t('quiz', "Надо (что делать?)", "", { options: ["Учиться", "Учится"], correctIndex: 0 })
    ]},
    { id: "default_068", title: "Планирование", description: "Матрица Эйзенхауэра", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('quiz', "Срочное и Важное — это...", "", { options: ["Сделать сейчас", "Делегировать", "Отложить", "Удалить"], correctIndex: 0 }),
        t('quiz', "Не срочное, но Важное — это...", "", { options: ["Запланировать", "Удалить", "Сделать сейчас", "Игнорировать"], correctIndex: 0 }),
        t('matching', "Матрица Эйзенхауэра", "", { pairs: [
            {left: 'Подготовка к экзамену завтра', right: 'Срочно + Важно'},
            {left: 'Чтение полезной книги', right: 'Не срочно + Важно'},
            {left: 'Бесцельный скроллинг', right: 'Не срочно + Не важно'}
        ]}),
        t('quiz', "Кто придумал эту матрицу?", "", { options: ["Дуайт Эйзенхауэр", "Стив Джобс", "Илон Маск", "Альберт Эйнштейн"], correctIndex: 0 })
    ]},

    // --- DAY 9: HISTORY ---
    { id: "default_047", title: "Правители Руси", description: "Хронология", category: "history", categoryLabel: "История", categoryIcon: "⚔️", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('ordering', "Порядок правления", "", { shuffledItems: ["Петр I", "Иван Грозный", "Николай II", "Екатерина II"], correctOrder: ["Иван Грозный", "Петр I", "Екатерина II", "Николай II"] })
    ]},
    { id: "default_048", title: "Великие Открытия", description: "Кто что открыл?", category: "history", categoryLabel: "История", categoryIcon: "⚔️", rarity: "Epic", xp: 40, coins: 30, tasks: [
        t('matching', "Открытия", "", { pairs: [{left: 'Колумб', right: 'Америка'}, {left: 'Гагарин', right: 'Космос'}, {left: 'Менделеев', right: 'Периодический закон'}] }),
        t('number_input', "В каком году Гагарин полетел в космос?", "1961", {})
    ]},
    { id: "default_069", title: "Режим сна", description: "Ложись вовремя", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Common", xp: 15, coins: 10, tasks: [
        t('checklist', "Сон", "", { checklistItems: [{id:'1', label: 'Убрал телефон за час'}, {id:'2', label: 'Проветрил комнату'}, {id:'3', label: 'Лёг до 23:00'}]}),
        t('quiz', "Сколько часов сна нужно подростку?", "", { options: ["8-10 часов", "4-5 часов", "12+ часов"], correctIndex: 0 }),
        t('quiz', "Почему синий свет экрана мешает сну?", "", { options: ["Подавляет выработку мелатонина", "Нагревает глаза", "Никак не влияет"], correctIndex: 0 })
    ]},

    // --- DAY 10: LITERATURE ---
    { id: "default_022", title: "Герои Книг", description: "Кто написал?", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('matching', "Автор - Герой", "", { pairs: [{left: 'Пушкин', right: 'Онегин'}, {left: 'Лермонтов', right: 'Печорин'}, {left: 'Толстой', right: 'Пьер Безухов'}] })
    ]},
    { id: "default_023", title: "Стихотворные размеры", description: "Ритм поэзии", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Rare", xp: 40, coins: 30, tasks: [
        t('quiz', "Ударный, Безударный (2 слога)", "", { options: ["Хорей", "Ямб"], correctIndex: 0 }),
        t('quiz', "Безударный, Ударный (2 слога)", "", { options: ["Ямб", "Хорей"], correctIndex: 0 }),
        t('quiz', "Мой дЯдя сАмых чЕстных прАвил...", "", { options: ["Ямб", "Дактиль", "Хорей"], correctIndex: 0 })
    ]},
    { id: "default_076", title: "Ораторское искусство", description: "Речь и дикция", category: "literature", categoryLabel: "Литература", categoryIcon: "📚", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('timer_challenge', "Скажи скороговорку: 'Шла Саша по шоссе' 3 раза без запинки", "да", { timerSeconds: 20, acceptableAnswers: ["да", "готово"] }),
        t('quiz', "Что такое дикция?", "", { options: ["Чёткое произношение звуков", "Громкость голоса", "Скорость речи"], correctIndex: 0 }),
        t('matching', "Средства выразительности речи", "", { pairs: [{left: 'Интонация', right: 'Повышение/понижение голоса'}, {left: 'Пауза', right: 'Остановка для эффекта'}, {left: 'Жесты', right: 'Движения рук'}] })
    ]},

    // --- DAY 11: FINANCE ---
    { id: "default_087", title: "Бюджет Героя", description: "Доходы и расходы", category: "finance", categoryLabel: "Финансы", categoryIcon: "💰", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('quiz', "Карманные деньги — это...", "", { options: ["Доход", "Расход", "Кредит"], correctIndex: 0 }),
        t('quiz', "Покупка игры — это...", "", { options: ["Расход", "Инвестиция", "Доход"], correctIndex: 0 }),
        t('number_input', "Было 500₽, потратил 150₽. Остаток?", "350", {}),
        t('matching', "Финансовая грамотность", "", { pairs: [
            {left: 'Зарплата', right: 'Доход'},
            {left: 'Аренда', right: 'Расход'},
            {left: 'Вклад в банке', right: 'Сбережение'}
        ]})
    ]},
    { id: "default_088", title: "Копилка", description: "Финансовая цель", category: "finance", categoryLabel: "Финансы", categoryIcon: "💰", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('checklist', "Цель", "", { checklistItems: [{id:'1', label: 'Придумай цель накопления'}, {id:'2', label: 'Отложи 10% от имеющихся денег'}] })
    ]},
    { id: "default_070", title: "SMART Цели", description: "Умное планирование", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Epic", xp: 45, coins: 35, tasks: [
        t('ordering', "Расшифруй SMART", "", { shuffledItems: ["Measurable (Измеримая)", "Specific (Конкретная)", "Achievable (Достижимая)"], correctOrder: ["Specific (Конкретная)", "Measurable (Измеримая)", "Achievable (Достижимая)"] }),
        t('quiz', "Какая цель SMART?", "", { options: ["Хочу быть богатым", "Накопить 1000р к пятнице"], correctIndex: 1 })
    ]},

    // --- DAY 12: BIO & ECO ---
    { id: "default_039", title: "Анатомия Человека", description: "Твое тело", category: "science", categoryLabel: "Наука", categoryIcon: "🔬", rarity: "Epic", xp: 40, coins: 30, tasks: [
        t('drag_to_image', "Расставь органы", "", { 
            imageUrl: "https://placehold.co/600x400?text=Human+Body",
            dropZones: [
                { id: 'heart', x: 45, y: 35, width: 10, height: 10, label: 'Сердце' },
                { id: 'lungs', x: 35, y: 30, width: 30, height: 20, label: 'Легкие' },
                { id: 'stomach', x: 45, y: 55, width: 15, height: 10, label: 'Желудок' }
            ],
            items: [
                { id: 'item-heart', label: 'Сердце', targetZoneId: 'heart' },
                { id: 'item-lungs', label: 'Легкие', targetZoneId: 'lungs' },
                { id: 'item-stomach', label: 'Желудок', targetZoneId: 'stomach' }
            ]
        }),
        t('number_input', "Сколько камер в сердце человека?", "4", {})
    ]},
    { id: "default_082", title: "Пищевые Цепочки", description: "Экосистема", category: "ecology", categoryLabel: "Экология", categoryIcon: "🌱", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('ordering', "Цепочка", "", { shuffledItems: ["Волк", "Трава", "Заяц"], correctOrder: ["Трава", "Заяц", "Волк"] }),
        t('quiz', "Кто здесь продуцент (производитель)?", "", { options: ["Трава", "Волк", "Гриб"], correctIndex: 0 })
    ]},
    { id: "default_060", title: "Спорт: Растяжка", description: "Гибкость", category: "sport", categoryLabel: "Спорт", categoryIcon: "💪", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('checklist', "Комплекс", "", { checklistItems: [{id:'1', label: 'Наклоны к полу (10 раз)'}, {id:'2', label: 'Тянем руки вверх'}, {id:'3', label: 'Повороты корпуса (10 раз)'}] }),
        t('quiz', "Когда лучше делать растяжку?", "", { options: ["После разминки, на тёплые мышцы", "Утром сразу из кровати", "Не имеет значения"], correctIndex: 0 })
    ]},

    // --- DAY 13: IT & LOGIC ---
    { id: "default_094", title: "Алгоритмы", description: "Порядок действий", category: "it", categoryLabel: "IT / Информатика", categoryIcon: "💻", rarity: "Epic", xp: 50, coins: 40, tasks: [
        t('ordering', "Алгоритм: Чай", "", { shuffledItems: ["Налить кипяток", "Вскипятить воду", "Положить пакетик"], correctOrder: ["Вскипятить воду", "Положить пакетик", "Налить кипяток"] }),
        t('quiz', "Что такое цикл?", "", { options: ["Повторение действий", "Остановка программы", "Ошибка"], correctIndex: 0 })
    ]},
    { id: "default_095", title: "Двоичный Код", description: "Язык машин", category: "it", categoryLabel: "IT / Информатика", categoryIcon: "💻", rarity: "Legendary", xp: 60, coins: 50, tasks: [
        t('quiz', "101 в десятичной системе?", "", { options: ["5", "3", "4", "6"], correctIndex: 0 }),
        t('quiz', "1 байт = ? бит", "", { options: ["8", "10", "16", "4"], correctIndex: 0 }),
        t('matching', "Бит", "", { pairs: [{left: '0', right: 'Выкл'}, {left: '1', right: 'Вкл'}] })
    ]},
    { id: "default_007", title: "Степени двойки", description: "Информатика и математика", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Epic", xp: 50, coins: 40, tasks: [
        t('matching', "Степени", "", { pairs: [{left:'2^3', right:'8'}, {left:'2^5', right:'32'}, {left:'2^10', right:'1024'}] })
    ]},

    // --- DAY 14: BOSS & FINAL ---
    { id: "default_074", title: "Рефлексия", description: "Оглянись назад", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Rare", xp: 35, coins: 25, tasks: [
        t('quiz', "Рефлексия — это:", "", { options: ["Анализ своих действий и результатов", "Просто отдых", "Повторение уроков", "Чтение новостей"], correctIndex: 0 }),
        t('matching', "Инструменты рефлексии", "", { pairs: [
            {left: 'Дневник', right: 'Записывать мысли'},
            {left: 'Таймлайн', right: 'Визуализировать прогресс'},
            {left: 'SWOT-анализ', right: 'Сильные/слабые стороны'}
        ]}),
        t('ordering', "Цикл обучения Колба", "", { 
            shuffledItems: ["Размышление", "Опыт", "Выводы", "Применение"], 
            correctOrder: ["Опыт", "Размышление", "Выводы", "Применение"] 
        }),
        t('quiz', "Что полезнее всего после ошибки?", "", { options: ["Понять причину и сделать иначе", "Забыть и не думать", "Обвинить других", "Больше никогда не пробовать"], correctIndex: 0 })
    ]},
    { id: "default_100", title: "Арт: Креатив", description: "Мир искусства", category: "art", categoryLabel: "Искусство", categoryIcon: "🎨", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('matching', "Цвета и настроение", "", { pairs: [
            {left: 'Красный', right: 'Энергия, страсть'},
            {left: 'Синий', right: 'Спокойствие, глубина'},
            {left: 'Жёлтый', right: 'Радость, тепло'}
        ]}),
        t('quiz', "Три основных цвета (из которых можно смешать остальные):", "", { options: ["Красный, синий, жёлтый", "Чёрный, белый, серый", "Зелёный, оранжевый, фиолетовый"], correctIndex: 0 }),
        t('quiz', "Что такое композиция в рисунке?", "", { options: ["Расположение элементов на листе", "Название картины", "Тип кисти"], correctIndex: 0 }),
        t('quiz', "Какой цвет получится при смешении синего и жёлтого?", "", { options: ["Зелёный", "Оранжевый", "Фиолетовый", "Коричневый"], correctIndex: 0 })
    ]},
    { id: "default_071", title: "План Будущего", description: "Целеполагание", category: "self", categoryLabel: "Саморазвитие", categoryIcon: "✨", rarity: "Epic", xp: 60, coins: 40, tasks: [
        t('quiz', "SMART-цель должна быть:", "", { options: ["Конкретной, измеримой, достижимой, актуальной, ограниченной по времени", "Максимально амбициозной без плана", "Секретной от всех", "Только на один день"], correctIndex: 0 }),
        t('ordering', "Шаги к цели", "", { 
            shuffledItems: ["Определить цель", "Разбить на подзадачи", "Назначить сроки", "Начать выполнять", "Отслеживать прогресс"], 
            correctOrder: ["Определить цель", "Разбить на подзадачи", "Назначить сроки", "Начать выполнять", "Отслеживать прогресс"] 
        }),
        t('matching', "Примеры SMART", "", { pairs: [
            {left: 'Прочитать 2 книги за месяц', right: 'SMART-цель'},
            {left: 'Стать умнее', right: 'Нечёткая цель'},
            {left: 'Когда-нибудь выучить Python', right: 'Без дедлайна'}
        ]}),
        t('quiz', "Если цель кажется слишком большой, нужно:", "", { options: ["Разбить на маленькие шаги", "Отказаться от неё", "Ждать вдохновения", "Попросить кого-то сделать"], correctIndex: 0 }),
        t('quiz', "Что делать если не удалось выполнить план?", "", { options: ["Проанализировать причину и скорректировать", "Бросить навсегда", "Обвинить обстоятельства", "Никому не говорить"], correctIndex: 0 })
    ]},
    
    // --- Additional Pool Quests ---
    { id: "default_008", title: "Отрицательные числа", description: "Сложение и вычитание", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Common", xp: 20, coins: 15, tasks: [
        t('timer_challenge', "-5 + 3 = ?", "-2", { timerSeconds: 20 }),
        t('timer_challenge', "-10 - 5 = ?", "-15", { timerSeconds: 20 })
    ]},
    { id: "default_009", title: "Округление", description: "Приближенные значения", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Common", xp: 15, coins: 10, tasks: [
        t('quiz', "3.7 до целых?", "", { options: ["4", "3", "3.5"], correctIndex: 0 }),
        t('quiz', "12.2 до целых?", "", { options: ["12", "13", "12.5"], correctIndex: 0 })
    ]},
    { id: "default_010", title: "Римские цифры", description: "Древний счет", category: "math", categoryLabel: "Математика", categoryIcon: "🔢", rarity: "Rare", xp: 30, coins: 20, tasks: [
        t('matching', "Цифры", "", { pairs: [{left:'V', right:'5'}, {left:'IX', right:'9'}, {left:'X', right:'10'}] })
    ]},
];

// Post-process to assign deterministic IDs
export const rawQuests = questsData.map(quest => ({
    ...quest,
    tasks: quest.tasks.map((task: any, index: number) => ({
        ...task,
        id: `${quest.id}-${index}`
    }))
}));
