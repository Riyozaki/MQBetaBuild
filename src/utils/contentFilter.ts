/**
 * contentFilter.ts — Централизованный фильтр нецензурного контента
 * 
 * Место: src/utils/contentFilter.ts
 * 
 * Фильтрует:
 * - Русский мат (включая замаскированный: "х*й", "бl@", "ёб" и т.д.)
 * - Оскорбления и буллинг
 * - ЛГБТ-контент
 * - Обход фильтра через транслит, спецсимволы, пробелы
 * 
 * Использование:
 *   import { contentFilter } from '../utils/contentFilter';
 *   
 *   contentFilter.isClean(text)        → boolean
 *   contentFilter.check(text)          → { isClean, violations, censored }
 *   contentFilter.censor(text)         → string (с заменой на ***)
 */

// ============================================================
// 1. СЛОВАРИ
// ============================================================

/**
 * Корни нецензурных слов (основа для regex-построения).
 * Каждый корень будет автоматически расширен для поиска 
 * с учётом суффиксов и приставок.
 */
const MAT_ROOTS: string[] = [
    // Основные корни (без полных слов — только стемы)
    'хуй', 'хуя', 'хуе', 'хуё', 'хуи', 'хую', 'хул',
    'пизд', 'пезд',
    'бляд', 'блят', 'бля',
    'ебат', 'ебан', 'ебаш', 'ебал', 'ебну', 'ебёт', 'ебет', 'ебут', 'ебли', 'ёбан', 'ёбар', 'ёбну',
    'еблан', 'ёблан',
    'сука', 'суки', 'суке', 'сучк', 'сучар', 'сучён', 'сучен',
    'залуп',
    'муда', 'мудак', 'мудил', 'мудо',
    'дроч', 'подроч', 'задроч', 'надроч',
    'манд',
    'шалав', 'шлюх', 'шлюш',
    'гандон', 'гондон',
    'педик', 'педер', 'педор', 'пидар', 'пидор', 'пидр', 'педр',
    'жопа', 'жоп',
    'срать', 'срал', 'насрал', 'засран', 'высрал', 'обосра', 'усрал',
    'говно', 'говна', 'говне', 'говну', 'говён', 'говен',
    'трах',  // only with certain contexts - handled below
    'долбоёб', 'долбоеб',
    'заеб', 'заёб', 'отъеб', 'отъёб', 'въеб', 'въёб', 'уеб', 'уёб', 'наеб', 'наёб', 'поеб', 'поёб',
    'выблядок', 'выблядк',
    'ублюд', 'ублюж',
    'целк',
];

/**
 * Полные слова и фразы, которые нужно блокировать целиком
 * (не как корни, а как exact/partial match)
 */
const BLOCKED_WORDS: string[] = [
    // Оскорбления
    'дебил', 'дебилк', 'дебильн',
    'идиот', 'идиотк',
    'кретин', 'кретинк',
    'даун', 'даунит',
    'лох', 'лошар', 'лохушк',
    'тварь', 'твари',
    'урод', 'уродк', 'уродин',
    'придурок', 'придурк',
    'дура', 'дурак', 'дурочк', 'дурища',
    'тупой', 'тупая', 'тупица', 'тупиц',
    'отстой', 'отстал',
    'чмо', 'чмошник', 'чмошниц',
    'лузер',
    'нахуй', 'нахер', 'нафиг', 'нахрен', // swear redirects
    'похуй', 'похер', 'пофиг',
    'охуе', 'офиге',
    'ахуе',
    'хрен',  // mild but still filtered for child app
    'жиртрест', 'жирдяй', 'жирух',
    'быдло', 'быдляк',
    'чурк', 'чурбан',
    'хач',
    'нигер', 'ниггер', 'негритос',
    
    // ЛГБТ-контент
    'гей', 'геи', 'гея', 'геев',
    'лесби', 'лесбиянк',
    'гомосек', 'гомик', 'гомос',
    'трансгенд', 'транссекс',
    'бисексуал',
    'квир',
    'небинарн',
    'лгбт', 'lgbt',
    'гомофоб',       // both sides of the discourse
    'трансфоб',
    'прайд',          // в контексте ЛГБТ
    'каминг-аут', 'камингаут', 'coming out',
    'дрэг-квин', 'drag queen',
    
    // Наркотики / алкоголь (для детского приложения)
    'наркот', 'наркоман',
    'косяк', // в контексте наркотиков
    'травк',  // в контексте наркотиков
    'водяр', 'бухл', 'бухат', 'бухой', 'нажрал',
];

/**
 * Карта замен символов для обхода фильтра.
 * Пользователи часто заменяют буквы на похожие символы.
 */
const CHAR_SUBSTITUTIONS: Record<string, string> = {
    // Латиница → Кириллица
    'a': 'а', 'b': 'б', 'c': 'с', 'e': 'е', 'h': 'н',
    'k': 'к', 'l': 'л', 'm': 'м', 'o': 'о', 'p': 'р',
    'r': 'р', 't': 'т', 'u': 'у', 'x': 'х', 'y': 'у',
    
    // Цифры → буквы
    '0': 'о', '3': 'з', '4': 'ч', '6': 'б',
    
    // Спецсимволы
    '@': 'а', '$': 'с', '!': 'и',
    
    // Ё → Е нормализация
    'ё': 'е',
};

// ============================================================
// 2. НОРМАЛИЗАЦИЯ ТЕКСТА
// ============================================================

/**
 * Нормализует текст для проверки:
 * 1. Lowercase
 * 2. Убирает пробелы/символы ВНУТРИ слов (п и з д а → пизда)
 * 3. Заменяет визуально похожие символы
 * 4. Убирает повторяющиеся буквы (блляяя → бля)
 */
const normalize = (text: string): string => {
    let result = text.toLowerCase();
    
    // Шаг 1: Заменяем спецсимволы на кириллицу
    result = result.split('').map(ch => CHAR_SUBSTITUTIONS[ch] || ch).join('');
    
    // Шаг 2: Убираем всё кроме кириллицы, латиницы и цифр
    // (это склеивает "п и з д а" → "пизда")
    result = result.replace(/[^а-яёa-z0-9]/g, '');
    
    // Шаг 3: Убираем повторяющиеся символы (ааааа → а, бляяяя → бля)
    result = result.replace(/(.)\1{2,}/g, '$1');
    
    return result;
};

/**
 * Создаёт варианты слова с учётом возможных разделителей.
 * "хуй" → проверяет "х*уй", "х у й", "ху.й" и т.д.
 */
const createFlexiblePattern = (word: string): RegExp => {
    // Между каждой буквой допускаем 0-2 произвольных символа
    const pattern = word.split('').join('[^а-яёa-z]{0,2}');
    return new RegExp(pattern, 'gi');
};

// ============================================================
// 3. ДВИЖОК ПРОВЕРКИ
// ============================================================

interface FilterResult {
    isClean: boolean;
    violations: string[];    // Какие правила нарушены
    censored: string;        // Текст с заменой на ***
}

/**
 * Проверяет нормализованный текст на наличие запрещённых корней
 */
const checkNormalized = (normalizedText: string): string[] => {
    const violations: string[] = [];
    
    // Проверка корней мата
    for (const root of MAT_ROOTS) {
        if (normalizedText.includes(root)) {
            violations.push(`мат: ${root}...`);
        }
    }
    
    // Проверка полных слов
    for (const word of BLOCKED_WORDS) {
        const normalizedWord = normalize(word);
        if (normalizedText.includes(normalizedWord)) {
            violations.push(`запрещено: ${word}`);
        }
    }
    
    return violations;
};

/**
 * Проверяет оригинальный текст на обход фильтра через разделители
 * (п.и.з.д.а, х-у-й и т.д.)
 */
const checkWithSeparators = (originalText: string): string[] => {
    const violations: string[] = [];
    const lowerText = originalText.toLowerCase();
    
    // Проверяем только самые частые корни мата через flexible pattern
    const criticalRoots = [
        'хуй', 'пизд', 'бляд', 'ебат', 'ебан', 'сука', 'мудак', 
        'пидор', 'пидар', 'гандон', 'гондон', 'долбоеб'
    ];
    
    for (const root of criticalRoots) {
        const pattern = createFlexiblePattern(root);
        if (pattern.test(lowerText)) {
            violations.push(`обход фильтра: ${root}`);
        }
    }
    
    return violations;
};

/**
 * Цензурирует текст — заменяет найденные слова на звёздочки.
 * Работает с оригинальным текстом (не нормализованным).
 */
const censorText = (text: string): string => {
    let result = text;
    
    // Заменяем полные слова
    const allPatterns = [...MAT_ROOTS, ...BLOCKED_WORDS];
    
    for (const word of allPatterns) {
        // Создаём regex, который ищет слово с возможными окончаниями
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped + '[а-яёa-z]*', 'gi');
        result = result.replace(regex, (match) => '★'.repeat(Math.min(match.length, 6)));
    }
    
    return result;
};

// ============================================================
// 4. ПУБЛИЧНЫЙ API
// ============================================================

export const contentFilter = {
    /**
     * Быстрая проверка — чисто или нет
     * Для использования в onChange/onSubmit
     */
    isClean: (text: string): boolean => {
        if (!text || text.trim().length === 0) return true;
        
        const normalized = normalize(text);
        
        // Быстрая проверка нормализованного текста
        for (const root of MAT_ROOTS) {
            if (normalized.includes(root)) return false;
        }
        for (const word of BLOCKED_WORDS) {
            if (normalized.includes(normalize(word))) return false;
        }
        
        // Проверка с разделителями (дороже, но ловит обход)
        const separatorViolations = checkWithSeparators(text);
        if (separatorViolations.length > 0) return false;
        
        return true;
    },
    
    /**
     * Полная проверка с деталями
     * Для использования в admin/модерации
     */
    check: (text: string): FilterResult => {
        if (!text || text.trim().length === 0) {
            return { isClean: true, violations: [], censored: text || '' };
        }
        
        const normalized = normalize(text);
        const violations = [
            ...checkNormalized(normalized),
            ...checkWithSeparators(text),
        ];
        
        // Убираем дубликаты
        const uniqueViolations = [...new Set(violations)];
        
        return {
            isClean: uniqueViolations.length === 0,
            violations: uniqueViolations,
            censored: uniqueViolations.length > 0 ? censorText(text) : text,
        };
    },
    
    /**
     * Цензурировать текст (заменить запрещённое на ***)
     * Для отображения в чате при показе чужих сообщений
     */
    censor: (text: string): string => {
        if (!text) return '';
        return censorText(text);
    },
    
    /**
     * Проверить имя пользователя / название гильдии
     * Более строгая проверка (короткий текст, может быть целиком матерным)
     */
    isNameClean: (name: string): boolean => {
        if (!name || name.trim().length === 0) return false;
        
        // Стандартная проверка
        if (!contentFilter.isClean(name)) return false;
        
        // Дополнительно: проверяем без пробелов вообще
        // (ловит "ПиЗдА123" как имя)
        const stripped = name.replace(/\s+/g, '').toLowerCase();
        const normalizedStripped = normalize(stripped);
        
        for (const root of MAT_ROOTS) {
            if (normalizedStripped.includes(root)) return false;
        }
        for (const word of BLOCKED_WORDS) {
            if (normalizedStripped.includes(normalize(word))) return false;
        }
        
        return true;
    },
};

// ============================================================
// 5. REACT HOOK (опциональный)
// ============================================================

/**
 * Хук для удобного использования в формах
 * 
 * Пример:
 * const { value, setValue, isValid, error } = useFilteredInput();
 * <input value={value} onChange={e => setValue(e.target.value)} />
 * {error && <span className="text-red-400">{error}</span>}
 */
import { useState as useStateHook, useCallback } from 'react';

export const useFilteredInput = (initialValue: string = '') => {
    const [value, setRawValue] = useStateHook(initialValue);
    const [error, setError] = useStateHook<string | null>(null);
    
    const setValue = useCallback((newValue: string) => {
        setRawValue(newValue);
        
        if (!contentFilter.isClean(newValue)) {
            setError('Сообщение содержит недопустимые слова');
        } else {
            setError(null);
        }
    }, []);
    
    const isValid = error === null && value.trim().length > 0;
    
    return { value, setValue, isValid, error, setError };
};

export default contentFilter;
