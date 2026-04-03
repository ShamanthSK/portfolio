import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, SendHorizonal, Sparkles, X } from 'lucide-react';
import { sendChatMessage } from '../utils/api';

const starterMessages = [
  {
    role: 'assistant',
    content:
      'Hi! I can explain projects, skills, achievements, or help visitors navigate this portfolio.',
  },
];

function Chatbot({ portfolioData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(starterMessages);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input.trim() || loading) {
      return;
    }

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const reply = await sendChatMessage(userMessage.content, portfolioData);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            error.message ||
            'Something went wrong while contacting the AI assistant.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-coralGlow to-goldGlow px-5 py-3 font-semibold text-ink shadow-soft transition duration-300 hover:scale-[1.02]"
      >
        {isOpen ? <X size={18} /> : <Sparkles size={18} />}
        AI Guide
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="fixed bottom-24 right-6 z-50 flex h-[540px] w-[min(92vw,390px)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#091724]/95 shadow-soft backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyanGlow/15 p-2 text-cyanGlow">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="font-semibold text-white">Portfolio Assistant</p>
                  <p className="text-sm text-white/55">Ask about projects, skills, or navigation</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-7 ${
                    message.role === 'user'
                      ? 'ml-auto bg-gradient-to-r from-cyanGlow to-tealGlow text-ink'
                      : 'bg-white/8 text-white/85'
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {loading && (
                <div className="max-w-[85%] rounded-3xl bg-white/8 px-4 py-3 text-sm text-white/70">
                  Thinking through the portfolio details...
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about skills, projects, or contact details..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <SendHorizonal size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
