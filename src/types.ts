
export type TaskType = 
  | 'yes_no'           
  | 'quiz'             
  | 'text_input'       
  | 'number_input'     
  | 'timer_challenge'  
  | 'checklist'        
  | 'ordering'         
  | 'matching'
  | 'drag_to_image'
  | 'fill_blanks'
  | 'dragDrop'
  | 'crossword'
  | 'cloze'
  | 'trueFalse'
  | 'timeline'
  | 'findError'
  | 'speech'
  | 'draw';

export interface HintSystem {
  enabled: boolean;
  maxHints: number;
  hintCost: number;
  xpPenalty: number;
  hints: string[];
}

export interface Task {
  id: number | string;
  type: TaskType;
  question: string;
  
  // Quiz
  options?: string[];
  correctIndex?: number;
  
  // Input
  correctAnswer?: string;
  acceptableAnswers?: string[];
  caseSensitive?: boolean;
  
  // Timer
  timerSeconds?: number;
  
  // Checklist
  checklistItems?: { id: string; label: string }[];
  
  // Ordering
  correctOrder?: string[];
  shuffledItems?: string[]; // For initial display
  
  // Matching
  pairs?: { left: string; right: string }[];

  // Drag to Image
  imageUrl?: string;
  dropZones?: { id: string; x: number; y: number; width?: number; height?: number; label?: string }[];
  dragItems?: { id: string; label: string; correctZoneId: string }[];

  // Fill Blanks
  textWithBlanks?: string; // "The capital of France is ___"
  blankAnswers?: string[]; // ["Paris"]
  
  // DragDrop
  zones?: { id: string; label: string }[];
  items?: { id: string; text: string; correctZone: string }[];

  // Crossword
  grid?: string[][];
  clues?: { direction: 'across' | 'down'; number: number; clue: string; answer: string; startRow: number; startCol: number; }[];

  // Cloze
  clozeText?: string;
  clozeBlanks?: { id: string; answer: string; alternatives?: string[] }[];

  // TrueFalse
  statements?: { text: string; isTrue: boolean; explanation: string; }[];

  // Timeline
  events?: { text: string; year: number }[];

  // FindError
  errorText?: string;
  errors?: { startIndex: number; endIndex: number; correction: string }[];

  // Speech
  speechPrompt?: string;
  expectedText?: string;
  language?: 'en' | 'ru';

  // Draw
  drawPrompt?: string;
  referenceImage?: string;
  checkPoints?: { x: number; y: number; tolerance: number }[];

  // General
  hint?: string;
  hintSystem?: HintSystem;
  explanation?: string;
  xpBonus?: number;
  
  // State for user answers (optional, usually handled in component state)
  userAnswer?: any; 
}

export type QuestRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export type ThemeColor = 'purple' | 'blue' | 'green' | 'crimson' | 'amber';

export type QuestCategory = 
  | 'Math' | 'Russian' | 'Literature' | 'Lang' | 'Science' 
  | 'History' | 'Sport' | 'Social' | 'Ecology' | 'Self' 
  | 'Finance' | 'IT' | 'Art';

export type HeroClass = 'warrior' | 'mage' | 'ranger' | 'healer';

export type GradeGroup = 'grade5' | 'grade67' | 'grade89' | 'grade1011';

export interface Quest {
  id: number | string;
  title: string;
  description: string;
  category: QuestCategory | string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rarity: QuestRarity | string;
  xp: number;
  coins: number;
  completed: boolean;
  tasks: Task[];
  type: 'daily' | 'story' | 'quest'; 
  isHabit?: boolean; // New: Distinguishes routine tasks from random challenges
  disabled?: boolean;
  gradeRange?: [number, number]; 
  gradeGroup?: GradeGroup;
  minMinutes: number; 
  prerequisiteId?: number | string; // Quest ID that must be completed first
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'skin' | 'consumable';
  value: string;
  icon: string;
  category?: 'skin' | 'real' | 'boost';
  rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  conditionType: 'quests' | 'xp' | 'coins' | 'items' | 'streak';
  threshold: number;
  rewardXp: number;
  rewardCoins: number;
}

export interface QuestHistoryItem {
  questId: number | string;
  questTitle: string; 
  xpEarned: number;
  coinsEarned?: number;
  date: string; 
  score?: number;
  category?: string;
}

export interface SurveySubmission {
  id: string;
  date: string;
  motivationScore: number;
  stressScore: number;
  enjoymentScore: number;
}

export interface StoryDay {
  day: number;
  title: string;
  locationId: 'village' | 'forest' | 'mountains' | 'castle' | 'desert' | 'throne';
  locationName: string;
  description: string;
  character: 'wizard' | 'fairy' | 'warrior' | 'king';
  dialogue: string | { high: string; medium: string; low: string };
  questIds: (number | string)[] | {
    grade5: (number | string)[];
    grade67: (number | string)[];
    grade89: (number | string)[];
    grade1011: (number | string)[];
  };
  rewardText: string;
}

export interface UserProfile {
  uid?: string;
  username: string;
  email: string;
  role: 'student' | 'admin';
  avatar: string; 
  visitorAvatar?: string;
  level: number;
  grade?: number; 
  gradeGroup?: GradeGroup;
  currentXp: number;
  nextLevelXp: number;
  coins: number;
  currentHp: number; 
  completedQuests: number;
  inventory: string[]; 
  achievements: string[]; 
  questHistory: QuestHistoryItem[];
  surveyHistory: SurveySubmission[];
  hasParentalConsent: boolean;
  lastDailyMood?: string; 
  themeColor?: ThemeColor;
  
  heroClass?: HeroClass; 
  className?: string; // v2.0
  classEmoji?: string; // v2.0
  currentLocation?: string; // v2.0

  // Mechanics
  activeQuestTimers: Record<string, number>;
  habitStreaks?: Record<string, number>; 
  dailyCompletionsCount: number;
  lastCompletionTime?: number;
  suspiciousFlags: number;
  penaltyUntil?: number;
  streakDays: number;
  lastLoginDate?: string;
  streakTakenToday: boolean;
  
  // v2.0 Stats
  totalQuestsCompleted?: number;
  totalXpEarned?: number;
  totalCoinsEarned?: number;
  weeklyXp?: number;
  weeklyXpResetDate?: string;
  tutorialCompleted?: boolean;

  // Guilds
  guildId?: string;
  guildName?: string;
  guildRole?: GuildRole;
  guildXPContributed?: number;

  // Story Mode
  lastCampaignAdvanceDate?: string; // ISO Date string of last advancement
  campaign: {
    currentDay: number;
    isDayComplete: boolean;
    unlockedAllies: string[];
  };

  // v4.0: Item System
  inventoryItems: InventoryItem[];
  equipment: EquipmentSlots;
  dungeonProgress: DungeonProgress;
  dungeonEnergy?: { current: number; max: number; nextRegenAt: string | null };
}

export interface LeaderboardUser {
  username: string; 
  className: string;
  classEmoji: string;
  level: number;
  xp: number;
  weeklyXp?: number;
  totalQuestsCompleted?: number;
  streakDays?: number;
  isCurrentUser?: boolean;
  id?: number; // legacy support
  avatar?: string; // legacy support
}

export interface AdminAnalyticsData {
  studentId: number;
  studentName: string;
  grade: number;
  appTimeMinutes: number;
  completedQuests: number;
  avgMotivation: number;
}

// --- Guilds ---

export type GuildRole = 'leader' | 'officer' | 'member';

export interface GuildMember {
  email: string;
  username: string;
  role: GuildRole;
  level: number;
  className: string;
  xpContributed: number;
  joinedAt: string;
}

export interface GuildQuest {
  questId: string;
  guildId: string;
  questName: string;
  questType: 'collective' | 'competitive';
  category: string;
  targetValue: number;
  currentValue: number;
  status: 'active' | 'completed' | 'expired';
  createdBy: string;
  createdAt: string;
  expiresAt: string;
  contributors: { email: string; amount: number }[];
  rewards: {
    xp: number;
    coins: number;
    reputation: number;
  };
}

export interface GuildLevelInfo {
  level: number;
  name: string;
  bonusSlots: number;
  currentXp: number;
  nextLevelXp: number | null;
}

export interface GuildJoinRequest {
  id: string;
  userEmail: string;
  username: string;
  level: number;
  avatar: string;
  message?: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface GuildData {
  guildId: string;
  name: string;
  description: string;
  emblem: string;
  leaderEmail: string;
  totalXp: number;
  treasury: number;
  reputation: number;
  createdAt: string;
  guildLevel: GuildLevelInfo;
  members: GuildMember[];
  quests: GuildQuest[];
  memberCount: number;
  maxMembers: number;
  myRole: GuildRole | null;
  settings: {
    isOpen: boolean;
    [key: string]: any;
  };
  joinRequests?: GuildJoinRequest[];
}

export interface GuildSummary {
  guildId: string;
  name: string;
  description: string;
  emblem: string;
  level: number;
  levelName: string;
  totalXp: number;
  reputation: number;
  memberCount: number;
  maxMembers: number;
  isOpen: boolean;
  createdAt: string;
}

export interface GuildLeaderboardEntry {
  guildId: string;
  name: string;
  emblem: string;
  level: number;
  levelName: string;
  totalXp: number;
  reputation: number;
  memberCount: number;
  treasury: number;
}

export interface GuildMessage {
  guildId: string;
  email: string;
  username: string;
  message: string;
  messageType: 'text' | 'system' | 'achievement';
  createdAt: string;
}

export interface GuildRaid {
  id: string;
  name: string;
  description: string;
  bossHp: number;
  currentDamage: number;
  requiredParticipants: number;
  currentParticipants: string[];
  rewards: {
      xp: number;
      coins: number;
      item?: string;
  };
  expiresAt: string;
  status: 'active' | 'completed' | 'failed';
}

export interface GuildSeason {
  seasonId: string;
  name: string;
  startDate: string;
  endDate: string;
  guildRankings: {
      guildId: string;
      guildName: string;
      seasonXp: number;
      rank: number;
  }[];
  rewards: {
      top1: { coins: number; title: string };
      top3: { coins: number; title: string };
      top10: { coins: number; title: string };
  };
}

export interface GuildAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: {
      type: 'total_quests' | 'total_xp' | 'members' | 'treasury' | 'raid_wins';
      threshold: number;
  };
  reward: { guildXp: number; treasuryBonus?: number };
  unlockedAt?: string;
}

export interface GuildPublicInfo {
  guildId: string;
  name: string;
  description: string;
  emblem: string;
  level: number;
  levelName: string;
  totalXp: number;
  reputation: number;
  memberCount: number;
  maxMembers: number;
  isOpen: boolean;
  createdAt: string;
  members: { username: string; level: number; role: GuildRole; avatar?: string }[];
  achievements: GuildAchievement[];
}

// ═══ v4.0: СИСТЕМА ПРЕДМЕТОВ ═══

export type ItemType = 'weapon' | 'armor' | 'helmet' | 'accessory' | 'potion' | 'material';
export type ItemRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';
export type EquipmentSlot = 'weapon' | 'armor' | 'helmet' | 'accessory';

export interface ItemStats {
  attack?: number;       // +урон в подземельях
  defense?: number;      // -входящий урон
  speed?: number;        // +время на решение примера (секунды)
  mathBonus?: number;    // +% к урону за правильный ответ
  xpBonus?: number;      // +% к получаемому XP
  coinBonus?: number;    // +% к получаемому золоту
  hpBonus?: number;      // +макс HP
  critChance?: number;   // шанс крит-удара (0.0 - 1.0)
}

export interface GameItem {
  id: string;                    // Уникальный ID (например 'w_mage_r_01')
  name: string;                  // Название на русском
  description: string;           // Описание
  type: ItemType;                // Тип предмета
  slot?: EquipmentSlot;          // Для экипируемых — куда ставить
  rarity: ItemRarity;
  icon: string;                  // Имя иконки из lucide-react
  stats?: ItemStats;             // Бонусы экипировки
  classRestriction?: HeroClass[];// Какие классы могут носить (пусто = все)
  setId?: string;                // ID сета (если часть сета)
  stackable: boolean;            // Стакается ли (материалы, зелья — да)
  maxStack: number;              // Макс стак (1 для экипировки, 99 для материалов)
  sellPrice: number;             // Цена продажи NPC
  buyPrice?: number;             // Цена покупки в магазине (если продаётся)
}

export interface InventoryItem {
  itemId: string;
  quantity: number;
  obtainedAt?: string;
}

export interface EquipmentSlots {
  weapon: string | null;
  armor: string | null;
  helmet: string | null;
  accessory: string | null;
}

export interface SetBonus {
  setId: string;
  setName: string;
  pieces: string[];          // ID предметов в сете
  bonuses: {
    required: number;        // Сколько нужно предметов
    stats: ItemStats;        // Какие бонусы
    label: string;           // Описание бонуса
  }[];
}

export interface DungeonEnemy {
  id: string;
  name: string;
  icon: string;
  hp: number;
  attack: number;
  defense: number;
  mathDifficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  coinReward: number;
  isBoss: boolean;
}

export interface DungeonFloor {
  floor: number;
  enemies: DungeonEnemy[];
  isBossFloor: boolean;
}

export interface DungeonData {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredLevel: number;
  floors: DungeonFloor[];
  gradeGroup: GradeGroup;
  rewards: {
    xp: number;
    coins: number;
    guaranteedDrop?: string;   // ID гарантированного предмета
  };
}

export interface DungeonProgress {
  [dungeonId: string]: {
    bestFloor: number;
    completedAt: string | null;
    attempts: number;
    totalKills: number;
    totalDamageDealt: number;
    lastRunDate: string | null;
  };
}

export interface CraftRecipe {
  id: string;
  name: string;
  resultItemId: string;
  resultQuantity: number;
  materials: { itemId: string; quantity: number }[];
  requiredLevel?: number;
}

export interface TradeOffer {
  tradeId: string;
  guildId: string;
  sellerEmail: string;
  offeredItemId: string;
  offeredQuantity: number;
  requestedItemId: string;
  requestedQuantity: number;
  status: 'active' | 'completed' | 'cancelled' | 'expired';
  createdAt: string;
  expiresAt: string;
}