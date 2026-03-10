import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { motion } from 'framer-motion';
import { Sword, Shield, Heart, Zap, Skull, ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DUNGEONS_DB } from '../data/dungeonsDatabase';
import DungeonBattleEngine from '../components/dungeon/DungeonBattleEngine';

const Dungeon: React.FC = () => {
    const { user } = useAuth();
    const { dungeonEnergy, dungeonProgress } = useSelector((state: RootState) => state.inventory);
    const [activeDungeon, setActiveDungeon] = useState<string | null>(null);

    if (!user) return null;

    if (activeDungeon) {
        const dungeon = DUNGEONS_DB.find(d => d.id === activeDungeon);
        if (dungeon) {
            return <DungeonBattleEngine dungeon={dungeon} onClose={() => setActiveDungeon(null)} />;
        }
    }

    return (
        <div className="max-w-4xl mx-auto pb-24 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link to="/" className="p-2 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
                        <ArrowLeft size={24} />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-white rpg-font tracking-wider">Подземелья</h1>
                        <p className="text-slate-400">Сражайся с монстрами и добывай экипировку</p>
                    </div>
                </div>
                
                <div className="glass-panel px-4 py-2 rounded-xl border border-blue-500/30 flex items-center gap-3">
                    <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400">
                        <Zap size={18} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">Энергия</div>
                        <div className="font-bold text-blue-400">{dungeonEnergy.current} / {dungeonEnergy.max}</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DUNGEONS_DB.map(dungeon => (
                    <div key={dungeon.id} className="glass-panel p-6 rounded-2xl border border-slate-700/50 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{dungeon.name}</h3>
                                <p className="text-sm text-slate-400">{dungeon.description}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg text-sm font-bold">
                                <Zap size={14} />
                                {dungeon.energyCost}
                            </div>
                        </div>
                        
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-700/50">
                            <div className="text-sm text-slate-400">
                                Ур. {dungeon.minLevel}+
                            </div>
                            <button
                                onClick={() => setActiveDungeon(dungeon.id)}
                                disabled={dungeonEnergy.current < dungeon.energyCost || user.level < dungeon.minLevel}
                                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-xl font-bold transition-colors"
                            >
                                <Play size={16} />
                                Войти
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dungeon;
