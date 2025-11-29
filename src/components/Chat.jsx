import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const qaPairs = [
    {
  keywords: ["hello", "hi", "hey", "how are you", "good morning", "good evening", "good afternoon", "what's up"],
  answer: "Hello! 👋 I'm doing great and ready to answer your questions about Nirmal's skills, projects, experience, or education 😊",
},

  {
    keywords: ["skill", "skills", "stack", "tech"],
    answer:
      "I work mainly with Python, R, SQL, Java, and MongoDB. My core skills include machine learning, predictive analytics, statistical modeling, deep learning (TensorFlow, PyTorch), and data visualization with Tableau and Plotly Dash.",
  },
  {
    keywords: ["project", "projects", "work"],
    answer:
      "My main projects are: CarioNet (U-Net for dental caries segmentation), IPL score prediction using ML, and engine efficiency & battery life prediction from OBD data.",
  },
  {
    keywords: ["experience", "intern", "internship"],
    answer:
      "I’ve worked as a Data Science Intern at Entri Elevate (IPL match outcome modeling) and as an R&D Intern at Dyocense (data pipelines, dashboards, predictive analytics).",
  },
  {
    keywords: ["education", "study", "degree"],
    answer:
      "I completed an M.Sc. in Data Science at Christ University, a BCA at St Joseph’s College Devagiri, and I am pursuing a PG Diploma in Big Data Analytics at CDAC.",
  },
  {
    keywords: ["contact", "hire", "job", "opportunity"],
    answer:
      "You can contact me via email at nirmalthambi001@gmail.com or on LinkedIn: linkedin.com/in/nirmal-t-88782223a.",
  },
];

const getBotReply = (userMessage) => {
  const text = userMessage.toLowerCase();
  for (const pair of qaPairs) {
    if (pair.keywords.some((k) => text.includes(k))) {
      return pair.answer;
    }
  }
  return "I’m glad you asked! I specialize in data science, ML and deep learning. Try asking about my skills, projects, experience, or education 😊";
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm Nirmal's  assistant. Ask me about his skills, projects, experience, or education!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 10,000 ms = 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input.trim() };
    const botMsg = { from: "bot", text: getBotReply(input.trim()) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      {/* Toggle button when minimized */}
      {!isOpen && (
        <button
          className="chat-widget-toggle"
          onClick={() => setIsOpen(true)}
        >
          💬 Chat
        </button>
      )}

      {/* Chat window when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="chat-widget-header">
              <span>Chat with me</span>
              <button
                className="chat-widget-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={
                    "chat-bubble " +
                    (m.from === "user"
                      ? "chat-bubble-user"
                      : "chat-bubble-bot")
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form className="chat-input-row" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Ask something like: What are your skills?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="btn-primary chat-send-btn">
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chat;
