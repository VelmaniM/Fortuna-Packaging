import { useState, useRef, useEffect } from 'react';
import { HiChatAlt2, HiX, HiPaperAirplane } from 'react-icons/hi';
import { COMPANY } from '../../utils/constants';
import FortunaLogo from './FortunaLogo';
import './ChatBot.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hi there! I'm the ${COMPANY.name} virtual assistant. How can I help you today? You can ask me about our products, contact details, or location.`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Simple Rule-Based NLP Logic
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();

    // Contact Logic
    if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('call') || text.includes('reach')) {
      return `You can reach us at ${COMPANY.phone} or email us at ${COMPANY.email}. We'd love to hear from you!`;
    }

    // Location Logic
    if (text.includes('location') || text.includes('where') || text.includes('address') || text.includes('office') || text.includes('factory')) {
      return `Our factory is located at: ${COMPANY.factory}. Our corporate office is at: ${COMPANY.corporate}.`;
    }

    // Products Logic
    if (text.includes('product') || text.includes('sell') || text.includes('make') || text.includes('offer') || text.includes('packaging')) {
      return `We manufacture high-quality flexible packaging, including Zipper Pouches, Laminated Rolls, Stand-up Pouches, and more for food and pharma brands.`;
    }

    // About Logic
    if (text.includes('about') || text.includes('who') || text.includes('company')) {
      return `${COMPANY.fullName} is a premier packaging manufacturer. Our motto is: "${COMPANY.tagline}". ${COMPANY.heroDescription}`;
    }

    // Website Logic
    if (text.includes('website')) {
      return `You can learn more at ${COMPANY.website}.`;
    }

    // Greeting Logic
    if (text === 'hi' || text === 'hello' || text === 'hey') {
      return `Hello! How can I assist you with your packaging needs today?`;
    }

    // Fallback Logic
    return `I'm a simple virtual assistant, so I might not understand everything! For specific inquiries, please feel free to email us at ${COMPANY.email} or use our Contact Form.`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate network delay for realistic typing feel
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getBotResponse(userMessage.text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  // Add initial timestamp to the welcome message
  useEffect(() => {
    setMessages(prev => {
      if (!prev[0].timestamp) {
        const newMessages = [...prev];
        newMessages[0].timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return newMessages;
      }
      return prev;
    });
  }, []);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'
        } bg-gradient-to-r from-red to-red-hover text-white`}
        aria-label="Open Chat"
      >
        <HiChatAlt2 size={28} />
      </button>

      {/* Chat Window Container (WhatsApp-like layout, Fortuna Theme) */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[85vw] max-w-[300px] h-[380px] max-h-[80vh] bg-white rounded-2xl shadow-[0_5px_40px_rgba(0,0,0,0.15)] border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-white border-b border-slate-100 shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <FortunaLogo size="sm" showTagline={false} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-slate-900 font-bold text-[14px] leading-tight tracking-wide">Fortuna Assistant</h3>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.6)]"></div>
                <span className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold leading-none">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1 shrink-0 hover:bg-slate-100 rounded-full"
            aria-label="Close Chat"
          >
            <HiX size={18} />
          </button>
        </div>

        {/* Chat Messages Area Wrapper */}
        <div className="flex-1 relative bg-white overflow-hidden">
          {/* Full Background Image (User Uploaded Logo) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/images/fortuna-colored-logo.jpg" 
              alt="Chat Background" 
              className="w-full h-full object-cover opacity-100" 
            />
          </div>

          {/* Scrolling Messages */}
          <div className="absolute inset-0 z-10 p-2.5 overflow-y-auto flex flex-col gap-1.5 scrollbar-hide overscroll-contain">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`relative max-w-[85%] px-2 py-1 text-[12px] leading-tight shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-red to-red-hover text-white rounded-l-lg rounded-br-lg rounded-tr-sm'
                      : 'bg-white border border-slate-100 text-slate-800 rounded-r-lg rounded-bl-lg rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                  {/* Timestamp */}
                  <div className="flex justify-end items-center gap-1 mt-0.5 -mb-0.5">
                    <span className={`text-[8.5px] leading-none ${msg.sender === 'user' ? 'text-white/90' : 'text-slate-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input Area */}
        <form onSubmit={handleSendMessage} className="px-2.5 py-2 bg-white border-t border-slate-100 flex gap-2 items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 text-[12.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red/50 focus:bg-white transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-red to-red-hover text-white flex items-center justify-center hover:shadow-[0_2px_8px_rgba(211,47,47,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
          >
            <HiPaperAirplane className="transform rotate-90 relative -left-0.5" size={14} />
          </button>
        </form>
      </div>
    </>
  );
}
