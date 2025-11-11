import React, { useState, useRef, useEffect } from 'react';
import { getBotResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CHATBOT_CONTEXT } from '../constants';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.03-3.268A8.965 8.965 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.72 14.24A7 7 0 0010 16a7 7 0 007-7c0-2.828-2.686-5-6-5S4 7.172 4 10a6.978 6.978 0 00.72 2.76l-.244.774.774-.244z" clipRule="evenodd" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
)

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
        setMessages([{ role: 'model', content: "Greetings. I am the Hack4Health assistant. How may I help you today?" }]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { role: 'user', content: userInput };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const botResponse = await getBotResponse(userInput, CHATBOT_CONTEXT);
      const newBotMessage: ChatMessage = { role: 'model', content: botResponse };
      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { role: 'model', content: "My apologies, but I seem to be experiencing a connection issue. Please try again shortly." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 p-4 rounded-full shadow-lg shadow-blue-500/30 z-50 transition-transform transform hover:scale-110"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] glow-card z-50 flex flex-col overflow-hidden">
          <header className="p-4 border-b border-blue-500/20 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">H4H Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <CloseIcon />
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white' : 'bg-white/5 text-gray-200'}`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-lg bg-white/5 text-gray-200">
                        <div className="flex items-center space-x-1">
                            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
              )}
               <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-blue-500/20">
            <div className="flex items-center bg-white/5 rounded-lg border border-white/10 focus-within:border-blue-500 transition-colors">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask anything..."
                className="w-full bg-transparent px-4 py-2 text-slate-200 focus:outline-none"
                disabled={isLoading}
              />
              <button type="submit" className="p-2 text-blue-400 hover:text-blue-300 disabled:opacity-50" disabled={isLoading || !userInput.trim()}>
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;