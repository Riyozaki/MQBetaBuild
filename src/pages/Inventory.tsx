import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchInventory, equipItem, unequipItem, usePotion, selectEquipment, selectInventory, selectEquippedStats } from '../store/inventorySlice';
import { ITEMS_DATABASE } from '../data/itemsDatabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Shield, Heart, Zap, Package, ArrowLeft, X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingOverlay from '../components/LoadingOverlay';
import { EquipmentSlot, GameItem, ItemType } from '../types';

const Inventory: React.FC = () => {
    const { user } = useAuth();
    const dispatch = useDispatch<AppDispatch>();
    
    const inventoryItems = useSelector(selectInventory);
    const equipment = useSelector(selectEquipment);
    const totalStats = useSelector(selectEquippedStats);
    const status = useSelector((state: RootState) => state.inventory.status);
    
    const [activeTab, setActiveTab] = useState<ItemType | 'all'>('all');
    const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
    const [isActionPending, setIsActionPending] = useState(false);

    useEffect(() => {
        if (user && status === 'idle') {
            dispatch(fetchInventory(user.email));
        }
    }, [user, status, dispatch]);

    if (!user) return null;

    const handleEquip = async (item: GameItem) => {
        if (!item.slot) return;
        setIsActionPending(true);
        try {
            await dispatch(equipItem({ 
                email: user.email, 
                itemId: item.id, 
                slot: item.slot,
                classRestriction: item.classRestriction,
                playerClass: user.heroClass
            })).unwrap();
            toast.success(`Экипировано: ${item.name}`);
            setSelectedItem(null);
        } catch (e: any) {
            toast.error(e.message || 'Ошибка при экипировке');
        } finally {
            setIsActionPending(false);
        }
    };

    const handleUnequip = async (slot: EquipmentSlot) => {
        setIsActionPending(true);
        try {
            await dispatch(unequipItem({ email: user.email, slot })).unwrap();
            toast.success('Предмет снят');
            setSelectedItem(null);
        } catch (e: any) {
            toast.error(e.message || 'Ошибка при снятии предмета');
        } finally {
            setIsActionPending(false);
        }
    };

    const handleUsePotion = async (item: GameItem) => {
        setIsActionPending(true);
        try {
            await dispatch(usePotion({ email: user.email, itemId: item.id })).unwrap();
            toast.success(`Использовано: ${item.name}`);
            setSelectedItem(null);
        } catch (e: any) {
            toast.error(e.message || 'Ошибка при использовании');
        } finally {
            setIsActionPending(false);
        }
    };

    // Render Equipment Slot
    const renderSlot = (slotName: EquipmentSlot, label: string, Icon: any) => {
        const equippedItemId = equipment[slotName];
        const equippedItem = equippedItemId ? ITEMS_DATABASE[equippedItemId] : null;

        return (
            <div 
                className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden h-24 ${equippedItem ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'}`}
                onClick={() => equippedItem && setSelectedItem(equippedItem)}
            >
                {equippedItem ? (
                    <>
                        <Icon size={24} className="text-primary-400 mb-1" />
                        <span className="text-xs font-bold text-slate-200 text-center truncate w-full px-1">{equippedItem.name}</span>
                        <span className="text-[10px] text-primary-400 mt-1 uppercase">{label}</span>
                    </>
                ) : (
                    <>
                        <Icon size={24} className="text-slate-600 mb-1" />
                        <span className="text-xs font-bold text-slate-500 uppercase">{label}</span>
                    </>
                )}
            </div>
        );
    };

    // Filter items
    const filteredItems = inventoryItems.map(invItem => ({
        ...invItem,
        itemData: ITEMS_DATABASE[invItem.itemId]
    })).filter(item => item.itemData && (activeTab === 'all' || item.itemData.type === activeTab));

    return (
        <div className="max-w-6xl mx-auto pb-24">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link to="/" className="p-2 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white rpg-font tracking-wider">Инвентарь</h1>
                    <p className="text-slate-400">Экипировка и предметы</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Equipment & Stats */}
                <div className="space-y-6">
                    {/* Equipment */}
                    <div className="glass-panel p-6 rounded-3xl border border-slate-700/50">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="text-primary-400" /> Экипировка
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {renderSlot('weapon', 'Оружие', Sword)}
                            {renderSlot('armor', 'Броня', Shield)}
                            {renderSlot('helmet', 'Шлем', Shield)}
                            {renderSlot('accessory', 'Аксессуар', Heart)}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="glass-panel p-6 rounded-3xl border border-slate-700/50">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Zap className="text-amber-400" /> Характеристики
                        </h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded-lg">
                                <span className="text-slate-400 text-sm">Атака</span>
                                <span className="font-bold text-white">{(totalStats.attack || 0)}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded-lg">
                                <span className="text-slate-400 text-sm">Защита</span>
                                <span className="font-bold text-white">{(totalStats.defense || 0)}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded-lg">
                                <span className="text-slate-400 text-sm">Шанс крита</span>
                                <span className="font-bold text-white">{((totalStats.critChance || 0) * 100).toFixed(0)}%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded-lg">
                                <span className="text-slate-400 text-sm">Бонус золота</span>
                                <span className="font-bold text-white">+{((totalStats.coinBonus || 0) * 100).toFixed(0)}%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded-lg">
                                <span className="text-slate-400 text-sm">Бонус опыта</span>
                                <span className="font-bold text-white">+{((totalStats.xpBonus || 0) * 100).toFixed(0)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Inventory Items */}
                <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-700/50 flex flex-col h-[600px]">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide shrink-0">
                        {['all', 'weapon', 'armor', 'helmet', 'accessory', 'potion', 'material'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                    activeTab === tab 
                                    ? 'bg-primary-600 text-white shadow-lg' 
                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                {tab === 'all' ? 'Все' : 
                                 tab === 'weapon' ? 'Оружие' : 
                                 tab === 'armor' ? 'Броня' : 
                                 tab === 'helmet' ? 'Шлемы' : 
                                 tab === 'accessory' ? 'Аксессуары' : 
                                 tab === 'potion' ? 'Зелья' : 'Материалы'}
                            </button>
                        ))}
                    </div>

                    {/* Items Grid */}
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {status === 'loading' && inventoryItems.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                            </div>
                        ) : filteredItems.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {filteredItems.map((item, idx) => (
                                    <div 
                                        key={`${item.itemId}-${idx}`}
                                        onClick={() => setSelectedItem(item.itemData)}
                                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 cursor-pointer hover:border-primary-500 transition-colors relative group"
                                    >
                                        <div className="aspect-square bg-slate-900/50 rounded-lg mb-2 flex items-center justify-center">
                                            {/* In a real app, use dynamic icons based on item.itemData.icon */}
                                            <Package size={32} className={`text-${item.itemData.rarity === 'Legendary' ? 'amber' : item.itemData.rarity === 'Epic' ? 'purple' : item.itemData.rarity === 'Rare' ? 'blue' : 'slate'}-400`} />
                                        </div>
                                        <div className="text-xs font-bold text-white truncate">{item.itemData.name}</div>
                                        {item.itemData.stackable && (
                                            <div className="absolute top-2 right-2 bg-slate-900 text-xs font-bold px-1.5 py-0.5 rounded text-slate-300">
                                                x{item.quantity}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-slate-500">
                                <Package size={48} className="mb-4 opacity-50" />
                                <p>В этой категории нет предметов</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Item Details Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-sm w-full shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                                    selectedItem.rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                    selectedItem.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                                    selectedItem.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                    'bg-slate-700/50 text-slate-300 border border-slate-600'
                                }`}>
                                    {selectedItem.rarity}
                                </div>
                                <button onClick={() => setSelectedItem(null)} className="text-slate-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shrink-0">
                                    <Package size={32} className="text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{selectedItem.name}</h3>
                                    <p className="text-sm text-slate-400">{selectedItem.type}</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-300 mb-6 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                {selectedItem.description}
                            </p>

                            {selectedItem.stats && (
                                <div className="mb-6 space-y-2">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Характеристики</h4>
                                    {Object.entries(selectedItem.stats).map(([stat, value]) => (
                                        <div key={stat} className="flex justify-between text-sm">
                                            <span className="text-slate-400 capitalize">{stat}</span>
                                            <span className="font-bold text-emerald-400">+{value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedItem.classRestriction && selectedItem.classRestriction.length > 0 && (
                                <div className="mb-6 flex items-center gap-2 text-sm">
                                    <span className="text-slate-500">Класс:</span>
                                    <span className={`font-bold ${selectedItem.classRestriction.includes(user.heroClass as any) ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {selectedItem.classRestriction.join(', ')}
                                    </span>
                                </div>
                            )}

                            <div className="flex gap-3 mt-6">
                                {selectedItem.slot && (
                                    equipment[selectedItem.slot] === selectedItem.id ? (
                                        <button 
                                            onClick={() => handleUnequip(selectedItem.slot!)}
                                            disabled={isActionPending}
                                            className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition-colors disabled:opacity-50"
                                        >
                                            Снять
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={() => handleEquip(selectedItem)}
                                            disabled={isActionPending || (selectedItem.classRestriction && !selectedItem.classRestriction.includes(user.heroClass as any))}
                                            className="flex-1 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-colors disabled:opacity-50"
                                        >
                                            Экипировать
                                        </button>
                                    )
                                )}
                                
                                {selectedItem.type === 'potion' && (
                                    <button 
                                        onClick={() => handleUsePotion(selectedItem)}
                                        disabled={isActionPending}
                                        className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-colors disabled:opacity-50"
                                    >
                                        Использовать
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <LoadingOverlay isLoading={isActionPending} message="Обработка...">
                <div />
            </LoadingOverlay>
        </div>
    );
};

export default Inventory;
