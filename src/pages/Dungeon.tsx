import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { motion } from 'framer-motion';
import { Sword, Shield, Heart, Zap, Skull, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dungeon: React.FC = () => {
    const { user } = useAuth();
    const { dungeonEnergy, dungeonProgress } = useSelector((state: RootState) => state.inventory);

    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto pb-24">
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
            <div className="glass-panel p-8 rounded-2xl border border-slate-700/50 text-center">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 border-2 border-slate-700">
                    <Skull size={48} className="text-slate-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Врата закрыты</h2>
                <p className="text-slate-400 max-w-md mx-auto mb-8">
                    Подземелья находятся в разработке. Скоро здесь появятся опасные монстры, эпические боссы и легендарный лут!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <Sword className="text-red-400 mb-2" size={24} />
                        <h3 className="font-bold text-white mb-1">Сражения</h3>
                        <p className="text-sm text-slate-400">Решай математические задачи для атаки</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <Shield className="text-blue-400 mb-2" size={24} />
                        <h3 className="font-bold text-white mb-1">Экипировка</h3>
                        <p className="text-sm text-slate-400">Добывай броню и оружие с боссов</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <Heart className="text-emerald-400 mb-2" size={24} />
                        <h3 className="font-bold text-white mb-1">Прогресс</h3>
                        <p className="text-sm text-slate-400">Спускайся глубже для лучших наград</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dungeon;
