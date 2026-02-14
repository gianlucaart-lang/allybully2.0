
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Ciao. Sono Humanity. Mi dispiace per quello che stai passando, ma voglio che tu sappia una cosa: sei al sicuro qui. Non c'è fretta. Quando ti senti pronto, raccontami cosa sta succedendo o semplicemente come ti senti oggi.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: textToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(messages, textToSend);
      const modelMsg: Message = { role: 'model', text: response, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      const errorMsg: Message = { role: 'model', text: "In questo momento ho difficoltà a rispondere, ma non voglio lasciarti solo. Se hai bisogno urgente, guarda la sezione 'Aiuto Urgente' in fondo alla pagina.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const supportActions = [
    { label: "Ho bisogno di calmarmi", prompt: "Aiutami a calmarmi, mi sento molto agitato." },
    { label: "Perché mi trattano male?", prompt: "Spiegami perché c'è questa cattiveria e perché hanno scelto me." },
    { label: "Cosa posso fare ora?", prompt: "Quali sono i primi passi concreti che posso fare per proteggermi?" },
    { label: "Voglio solo sfogarmi", prompt: "Ho solo bisogno di qualcuno che mi ascolti mentre mi sfogo." }
  ];

  return (
    <section id="chat" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-[12px] font-semibold text-blue-600 uppercase tracking-widest">Supporto Attivo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-4">Il tuo spazio di ascolto.</h2>
          <p className="text-xl text-[#86868b] max-w-xl mx-auto">Un'intelligenza empatica addestrata per proteggere la tua umanità.</p>
        </div>

        <div className="bg-[#f5f5f7] rounded-[3rem] border border-gray-200 overflow-hidden flex flex-col h-[700px] shadow-2xl relative">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-[16px] leading-relaxed transition-all duration-300 ${
                  msg.role === 'user' 
                    ? 'bg-[#0071e3] text-white rounded-br-none shadow-lg' 
                    : 'bg-white text-[#1d1d1f] border border-gray-100 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#86868b] mt-2 px-2 uppercase tracking-tighter">
                  {msg.role === 'user' ? 'Tu' : 'Humanity'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[#86868b] border border-gray-100 p-5 rounded-[1.5rem] rounded-bl-none shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-md border-t border-gray-200">
            {/* Quick Actions Scrollable */}
            <div className="flex overflow-x-auto gap-2 mb-4 pb-2 no-scrollbar">
              {supportActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action.prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] hover:border-gray-300 apple-transition disabled:opacity-50"
                >
                  {action.label}
                </button>
              ))}
            </div>

            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Condividi un pensiero..."
                className="w-full bg-[#f5f5f7] border-none rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30 apple-transition text-[16px]"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-3 w-10 h-10 bg-[#0071e3] text-white rounded-full flex items-center justify-center hover:bg-[#0077ed] disabled:opacity-30 apple-transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
