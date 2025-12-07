import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/ai';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I can answer questions about UnitSync deployment, compliance, and features. How can I help?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Prepare history for context (simplified for this demo)
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-200">
          <div className="bg-[#2E5BFF] p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">UnitSync Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#2E5BFF] text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 shadow-sm rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about HIPAA, features..."
              className="flex-1 px-4 py-2 border border-slate-200 rounded-full focus:outline-none focus:border-[#2E5BFF] focus:ring-1 focus:ring-[#2E5BFF] text-sm"
            />
            <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-[#2E5BFF] text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#2E5BFF] hover:bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};