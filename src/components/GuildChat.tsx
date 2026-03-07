import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchGuildChat, sendGuildMessage } from '../store/guildSlice';
import { Send, User, Shield, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contentFilter } from '../utils/contentFilter';
import { toast } from 'react-toastify';

const GuildChat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chat, guild } = useSelector((state: RootState) => state.guild);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [message, setMessage] = useState('');
  const [filterError, setFilterError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);

  const currentUserRef = useRef(currentUser);

  useEffect(() => {
    currentUserRef.current = currentUser;
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.email && currentUser?.guildId) {
      dispatch(fetchGuildChat(currentUser.email));
      
      const interval = setInterval(() => {
        if (document.hidden) return; // ← НЕ делать запрос при неактивной вкладке
        if (currentUserRef.current?.guildId && currentUserRef.current?.email) {
            dispatch(fetchGuildChat(currentUserRef.current.email));
        }
      }, 15000); // Poll every 15 seconds

      return () => clearInterval(interval);
    }
  }, [dispatch, currentUser?.email, currentUser?.guildId]);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !currentUser?.email || isSending) return;

    // ===== ФИЛЬТР =====
    const trimmed = message.trim();
    if (!contentFilter.isClean(trimmed)) {
        toast.error('Сообщение содержит недопустимые слова 🚫');
        return;
    }
    // ===== КОНЕЦ =====

    setIsSending(true);
    await dispatch(sendGuildMessage({ 
        email: currentUser.email, 
        message: trimmed, 
        messageType: 'text' 
    }));
    setMessage('');
    setFilterError(false);
    setIsSending(false);
  };

  const getMemberRole = (email: string) => {
    const normalized = email.toLowerCase().trim();
    return guild?.members.find(m => 
        m.email.toLowerCase().trim() === normalized
    )?.role || 'member';
  };

  return (
    <div className="flex flex-col h-[500px] bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <h3 className="font-bold text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Чат гильдии
        </h3>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {chat.length === 0 ? (
          <div className="text-center text-slate-500 py-10">
            <p>Сообщений пока нет. Начните общение!</p>
          </div>
        ) : (
          chat.map((msg, idx) => {
            const isMe = msg.email === currentUser?.email;
            const role = getMemberRole(msg.email);
            
            if (msg.messageType === 'system') {
                return (
                    <div key={idx} className="flex justify-center my-2">
                        <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">
                            {msg.message}
                        </span>
                    </div>
                );
            }

            return (
              <motion.div
                key={msg.createdAt + msg.email + idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isMe ? 'bg-indigo-600' : 'bg-slate-700'
                }`}>
                    <span className="text-xs font-bold text-white">
                        {msg.username.charAt(0).toUpperCase()}
                    </span>
                </div>
                
                <div className={`flex flex-col max-w-[80%] ${isMe ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">
                        {msg.username}
                    </span>
                    {role === 'leader' && <Crown size={10} className="text-amber-400" />}
                    {role === 'officer' && <Shield size={10} className="text-blue-400" />}
                    <span className="text-[10px] text-slate-600">
                        {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-2xl text-sm ${
                    isMe 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none'
                  }`}>
                    {contentFilter.censor(msg.message)}
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col gap-1">
        <form onSubmit={handleSend} className="flex gap-2 items-end">
          <div className="flex-1 relative">
              <input
              type="text"
              value={message}
              onChange={(e) => {
                  const val = e.target.value;
                  setMessage(val);
                  setFilterError(val.length > 2 && !contentFilter.isClean(val));
              }}
              placeholder="Написать сообщение..."
              maxLength={300}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-2 pr-12 text-white focus:outline-none focus:ring-1 transition-all ${
                  filterError 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
              }`}
              />
              <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${
                  message.length >= 300 ? 'text-rose-500 font-bold' : 'text-slate-600'
              }`}>
                  {message.length}/300
              </span>
          </div>
          <button
            type="submit"
            disabled={!message.trim() || isSending || filterError}
            className="p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-colors h-[42px]"
          >
            <Send size={20} />
          </button>
        </form>
        {filterError && (
            <p className="text-red-400 text-xs mt-1 ml-2">
                Недопустимые слова будут заблокированы
            </p>
        )}
      </div>
    </div>
  );
};

export default GuildChat;
