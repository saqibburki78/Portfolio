"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });
      const data = await response.json();
      if (data.ai_response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.ai_response },
        ]);
      }
    } catch (error) {
      console.error("Assistant Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="mb-4 w-[min(400px,calc(100vw-2rem))] h-[500px] flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-300"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-theme-accent to-theme-secondary flex items-center justify-center shadow-lg">
                <Bot className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Saqib's Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: 'rgba(255,255,255,0.2) transparent' 
            }}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 5px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
              }
            `}</style>
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                <Bot className="w-12 h-12 text-theme-accent mb-3 opacity-50" />
                <p className="text-white/80 text-sm font-medium">
                  Hello! I'm Saqib's AI assistant. Ask me anything about Saqib's skills, projects, or his background!
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-${msg.role === "user" ? "right" : "left"}-2`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-theme-accent/80 text-white rounded-tr-none shadow-lg" 
                      : "bg-white/10 text-white border border-white/10 rounded-tl-none backdrop-blur-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/10 text-white p-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="relative flex items-center gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me something..."
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-3 px-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-theme-accent/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-theme-accent hover:bg-theme-accent/80 text-white rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-white/30 mt-3 font-medium">
              Powered by Saqib's Genius Core
            </p>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isOpen ? "bg-white/10 backdrop-blur-xl border border-white/20 text-white" : "bg-linear-to-tr from-theme-accent to-theme-secondary text-white"
        }`}
        style={{ boxShadow: isOpen ? "none" : "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        {isOpen ? <X size={24} /> : <div className="relative">
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-theme-accent rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-theme-accent rounded-full" />
        </div>}
      </button>
    </div>
  );
}