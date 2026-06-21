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
        className={`chatbot__fab ${
          isOpen ? 'chatbot__fab--open' : 'chatbot__fab--closed'
        }`}
        aria-label="Open Chat"
      >
        <HiChatAlt2 size={28} />
      </button>

      {/* Chat Window Container (WhatsApp-like layout, Fortuna Theme) */}
      <div
        className={`chatbot__window ${
          isOpen ? 'chatbot__window--open' : 'chatbot__window--closed'
        }`}
      >
        {/* Chat Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-brand">
            <div className="chatbot__header-logo">
              <FortunaLogo size="sm" showTagline={false} />
            </div>
            <div className="chatbot__header-info">
              <h3 className="chatbot__header-title">Fortuna Assistant</h3>
              <div className="chatbot__status">
                <div className="chatbot__status-indicator"></div>
                <span className="chatbot__status-text">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="chatbot__close-button"
            aria-label="Close Chat"
          >
            <HiX size={18} />
          </button>
        </div>

        {/* Chat Messages Area Wrapper */}
        <div className="chatbot__body">
          {/* Full Background Image (User Uploaded Logo) */}
          <div className="chatbot__bg-wrapper">
            <img 
              src="/Fortuna-Packaging/images/fortuna-colored-logo.jpg" 
              alt="Chat Background" 
              className="chatbot__bg-image" 
            />
          </div>

          {/* Scrolling Messages */}
          <div className="chatbot__messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot__message-wrapper ${msg.sender === 'user' ? 'chatbot__message-wrapper--user' : 'chatbot__message-wrapper--bot'}`}
              >
                <div
                  className={`chatbot__message-bubble ${
                    msg.sender === 'user'
                      ? 'chatbot__message-bubble--user'
                      : 'chatbot__message-bubble--bot'
                  }`}
                >
                  {msg.text}
                  {/* Timestamp */}
                  <div className="chatbot__message-footer">
                    <span className={`chatbot__message-time ${msg.sender === 'user' ? 'chatbot__message-time--user' : 'chatbot__message-time--bot'}`}>
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
        <form onSubmit={handleSendMessage} className="chatbot__form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="chatbot__input"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="chatbot__submit"
          >
            <HiPaperAirplane className="chatbot__submit-icon" size={14} />
          </button>
        </form>
      </div>
    </>
  );
}
