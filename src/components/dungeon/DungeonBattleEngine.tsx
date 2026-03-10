import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Shield, Heart, Zap, X, Trophy, Skull } from 'lucide-react';
import { DungeonData, DungeonEnemy } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addExperience } from '../../store/userSlice';
import { api } from '../../services/api';
import toast from 'react-hot-toast';

interface Props {
    dungeon: DungeonData;
    onClose: () => void;
}

const DungeonBattleEngine: React.FC<Props> = ({ dungeon, onClose }) => {
    const { user } = useAuth();
    const dispatch = useDispatch<AppDispatch>();

    const [currentFloorIndex, setCurrentFloorIndex] = useState(0);
    const [currentEnemyIndex, setCurrentEnemyIndex] = useState(0);
    
    const [playerHp, setPlayerHp] = useState(user?.currentHp || 100);
    const [enemyHp, setEnemyHp] = useState(0);
    const [enemyMaxHp, setEnemyMaxHp] = useState(0);
    
    const [question, setQuestion] = useState({ text: '', answer: 0, options: [] as number[] });
    const [battleState, setBattleState] = useState<'intro' | 'fighting' | 'victory' | 'defeat' | 'dungeon_cleared'>('intro');
    
    const floor = dungeon.floors[currentFloorIndex];
    const enemy = floor?.enemies[currentEnemyIndex];

    useEffect(() => {
        if (battleState === 'intro' && enemy) {
            setEnemyHp(enemy.hp);
            setEnemyMaxHp(enemy.hp);
            generateQuestion();
            setBattleState('fighting');
        }
    }, [battleState, enemy]);

    const generateQuestion = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const answer = a + b;
        const options = [answer, answer + 1, answer - 1, answer + 2].sort(() => Math.random() - 0.5);
        setQuestion({ text: `${a} + ${b} = ?`, answer, options });
    };

    const handleAnswer = async (selected: number) => {
        if (selected === question.answer) {
            // Player hits
            const damage = 15 + Math.floor(Math.random() * 10);
            const newEnemyHp = Math.max(0, enemyHp - damage);
            setEnemyHp(newEnemyHp);
            
            if (newEnemyHp === 0) {
                handleEnemyDefeated();
            } else {
                generateQuestion();
            }
        } else {
            // Enemy hits
            const damage = enemy.attack;
            const newPlayerHp = Math.max(0, playerHp - damage);
            setPlayerHp(newPlayerHp);
            
            if (newPlayerHp === 0) {
                setBattleState('defeat');
            } else {
                generateQuestion();
            }
        }
    };

    const handleEnemyDefeated = async () => {
        // Grant enemy rewards
        await dispatch(addExperience({ xp: enemy.xpReward, coins: enemy.coinReward }));
        
        if (currentEnemyIndex + 1 < floor.enemies.length) {
            setCurrentEnemyIndex(currentEnemyIndex + 1);
            setBattleState('intro');
        } else {
            // Floor cleared
            if (currentFloorIndex + 1 < dungeon.floors.length) {
                setCurrentFloorIndex(currentFloorIndex + 1);
                setCurrentEnemyIndex(0);
                setBattleState('intro');
            } else {
                // Dungeon cleared
                setBattleState('dungeon_cleared');
                
                // Grant dungeon rewards
                const { xp, coins, guaranteedDrop } = dungeon.rewards;
                await dispatch(addExperience({ xp, coins }));
                
                if (guaranteedDrop) {
                    try {
                        await api.addToInventory(user!.email, [{ itemId: guaranteedDrop, quantity: 1 }]);
                        toast.success(`Получен гарантированный лут: ${guaranteedDrop}!`);
                    } catch (e) {
                        console.error("Failed to add loot", e);
                    }
                }
            }
        }
    };

    if (!user || !enemy) return null;

    return (
        <div className="max-w-4xl mx-auto pb-24 p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{dungeon.name} - Этаж {floor.floor}</h2>
                <button onClick={onClose} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-white">
                    <X size={20} />
                </button>
            </div>

            {battleState === 'defeat' && (
                <div className="glass-panel p-8 text-center rounded-2xl">
                    <Skull size={64} className="mx-auto text-red-500 mb-4" />
                    <h2 className="text-3xl font-bold text-white mb-2">Поражение</h2>
                    <p className="text-slate-400 mb-6">Вы были повержены в подземелье.</p>
                    <button onClick={onClose} className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold">
                        Покинуть подземелье
                    </button>
                </div>
            )}

            {battleState === 'dungeon_cleared' && (
                <div className="glass-panel p-8 text-center rounded-2xl">
                    <Trophy size={64} className="mx-auto text-yellow-500 mb-4" />
                    <h2 className="text-3xl font-bold text-white mb-2">Подземелье зачищено!</h2>
                    <p className="text-slate-400 mb-6">Вы победили всех врагов и получили награды.</p>
                    <button onClick={onClose} className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold">
                        Вернуться в город
                    </button>
                </div>
            )}

            {battleState === 'fighting' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Player */}
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full mb-4 flex items-center justify-center text-4xl">
                            {user.avatar === 'warrior' ? '⚔️' : user.avatar === 'mage' ? '🔮' : '🏹'}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{user.username}</h3>
                        <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full transition-all" style={{ width: `${(playerHp / 100) * 100}%` }} />
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{playerHp} / 100 HP</div>
                    </div>

                    {/* Enemy */}
                    <div className="glass-panel p-6 rounded-2xl text-center border-red-500/30 border">
                        <div className="w-32 h-32 mx-auto bg-red-900/20 rounded-full mb-4 flex items-center justify-center text-4xl">
                            {enemy.icon === 'goblin' ? '👺' : enemy.icon === 'goblin_boss' ? '👹' : '💀'}
                        </div>
                        <h3 className="text-xl font-bold text-red-400 mb-2">{enemy.name}</h3>
                        <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full transition-all" style={{ width: `${(enemyHp / enemyMaxHp) * 100}%` }} />
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{enemyHp} / {enemyMaxHp} HP</div>
                    </div>

                    {/* Question */}
                    <div className="md:col-span-2 glass-panel p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">{question.text}</h3>
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                            {question.options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt)}
                                    className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xl transition-colors"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DungeonBattleEngine;
