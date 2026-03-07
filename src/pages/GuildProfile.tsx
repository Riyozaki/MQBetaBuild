import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { GuildPublicInfo } from '../types';
import { Shield, Users, Crown, ArrowLeft, Lock, Unlock, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { joinGuild, requestJoinGuild } from '../store/guildSlice';

const GuildProfile: React.FC = () => {
    const { guildId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { currentUser } = useSelector((state: RootState) => state.user);
    const [guildInfo, setGuildInfo] = useState<GuildPublicInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [joining, setJoining] = useState(false);

    useEffect(() => {
        if (guildId) {
            setLoading(true);
            api.getGuildPublicInfo(guildId)
                .then(res => setGuildInfo(res.data))
                .catch(err => console.error("Failed to load guild info", err))
                .finally(() => setLoading(false));
        }
    }, [guildId]);

    const handleJoin = async () => {
        if (!currentUser?.email || !guildInfo) return;
        
        setJoining(true);
        try {
            if (guildInfo.isOpen) {
                if (window.confirm(`Вступить в гильдию ${guildInfo.name}?`)) {
                    const result = await dispatch(joinGuild({ email: currentUser.email, guildId: guildInfo.guildId }));
                    if (joinGuild.fulfilled.match(result)) {
                        navigate('/guild');
                    }
                }
            } else {
                if (window.confirm(`Подать заявку на вступление в закрытую гильдию ${guildInfo.name}?`)) {
                    await dispatch(requestJoinGuild({ email: currentUser.email, guildId: guildInfo.guildId }));
                }
            }
        } finally {
            setJoining(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    if (!guildInfo) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-4">Гильдия не найдена</h2>
                <button 
                    onClick={() => navigate('/guilds')}
                    className="text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-2 mx-auto"
                >
                    <ArrowLeft size={20} /> Вернуться к списку
                </button>
            </div>
        );
    }

    const isFull = guildInfo.memberCount >= guildInfo.maxMembers;
    const isMember = currentUser?.guildId === guildInfo.guildId;

    return (
        <div className="max-w-4xl mx-auto pb-20 space-y-6">
            <button 
                onClick={() => navigate('/guilds')}
                className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
            >
                <ArrowLeft size={20} /> Назад к списку
            </button>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden"
            >
                {/* Header Banner */}
                <div className="h-32 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 relative">
                    <div className="absolute -bottom-12 left-8">
                        <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center text-5xl shadow-xl border-4 border-slate-900">
                            {guildInfo.emblem}
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className={`px-3 py-1.5 rounded-lg text-sm font-bold border flex items-center gap-1.5 backdrop-blur-md ${
                            guildInfo.isOpen 
                                ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/30' 
                                : 'bg-rose-900/40 text-rose-400 border-rose-500/30'
                        }`}>
                            {guildInfo.isOpen ? <Unlock size={14} /> : <Lock size={14} />}
                            {guildInfo.isOpen ? 'Открытая' : 'Закрытая'}
                        </div>
                    </div>
                </div>

                <div className="pt-16 px-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-white mb-2">{guildInfo.name}</h1>
                            <p className="text-slate-400 text-lg max-w-2xl">{guildInfo.description}</p>
                        </div>
                        
                        {!isMember && (
                            <button
                                onClick={handleJoin}
                                disabled={isFull || joining}
                                className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shrink-0 ${
                                    isFull
                                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20 hover:-translate-y-0.5'
                                }`}
                            >
                                {joining ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : null}
                                {isFull ? 'Мест нет' : guildInfo.isOpen ? 'Вступить в гильдию' : 'Подать заявку'}
                            </button>
                        )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                            <div className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-2">
                                <Crown size={16} className="text-amber-400" /> Уровень
                            </div>
                            <div className="text-2xl font-bold text-white">{guildInfo.level}</div>
                            <div className="text-xs text-slate-400 mt-1">{guildInfo.levelName}</div>
                        </div>
                        <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                            <div className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-2">
                                <Users size={16} className="text-blue-400" /> Участники
                            </div>
                            <div className="text-2xl font-bold text-white">{guildInfo.memberCount} <span className="text-slate-600 text-lg">/ {guildInfo.maxMembers}</span></div>
                        </div>
                        <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                            <div className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-2">
                                <Star size={16} className="text-purple-400" /> Опыт
                            </div>
                            <div className="text-2xl font-bold text-white">{guildInfo.totalXp.toLocaleString()}</div>
                        </div>
                        <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                            <div className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-2">
                                <Trophy size={16} className="text-emerald-400" /> Репутация
                            </div>
                            <div className="text-2xl font-bold text-white">{guildInfo.reputation.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Members List */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Users className="text-indigo-500" /> Участники
                            </h3>
                            <div className="bg-slate-950/50 rounded-2xl border border-slate-800/50 overflow-hidden">
                                {guildInfo.members.map((member, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-900/50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white overflow-hidden border border-slate-700">
                                                {member.avatar ? (
                                                    <img src={`/avatars/${member.avatar}.png`} alt={member.username} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/avatars/warrior.png'; }} />
                                                ) : (
                                                    member.username.charAt(0)
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white flex items-center gap-2">
                                                    {member.username}
                                                    {member.role === 'leader' && <Crown size={14} className="text-amber-400" />}
                                                    {member.role === 'officer' && <Shield size={14} className="text-blue-400" />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-slate-400 bg-slate-900 px-3 py-1 rounded-lg">
                                            Ур. {member.level}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Trophy className="text-amber-500" /> Достижения
                            </h3>
                            <div className="space-y-3">
                                {guildInfo.achievements && guildInfo.achievements.length > 0 ? (
                                    guildInfo.achievements.map((ach) => (
                                        <div key={ach.id} className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 flex items-start gap-3">
                                            <div className="text-2xl">{ach.icon}</div>
                                            <div>
                                                <div className="font-bold text-white text-sm">{ach.title}</div>
                                                <div className="text-xs text-slate-500">{ach.description}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 bg-slate-950/50 rounded-xl border border-slate-800/50 text-slate-500 text-sm">
                                        Пока нет достижений
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default GuildProfile;
