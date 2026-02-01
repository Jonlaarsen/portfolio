"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm an AI assistant powered by Gemini. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Gemini AI
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      if (!genAI || !apiKey) {
        throw new Error("API key not configured");
      }

      // Get the Gemini model
      // Try gemini-1.5-pro first (most commonly available)
      // If this fails, your API key might need to be regenerated or you may need
      // to enable the Gemini API in Google Cloud Console
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      // Create a conversation history for context
      const conversationHistory = messages
        .map((msg) => {
          if (msg.role === "user") {
            return `User: ${msg.content}`;
          } else {
            return `Assistant: ${msg.content}`;
          }
        })
        .join("\n");

      const prompt = `${conversationHistory}\nUser: ${userMessage.content}\nAssistant:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const assistantMessage: Message = {
        role: "assistant",
        content: text,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("Error calling Gemini API:", error);
      let errorMessage: Message;

      if (error) {
        errorMessage = {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Gemini flash-2-0 might be down, please come back later",
        };
      }

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-red-400 to-red-500 text-white rounded-full shadow-2xl shadow-red-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-red-400/70 ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 md:w-100 h-125 md:h-150 bg-linear-to-br from-black/95 via-zinc-900/95 to-zinc-950/95 backdrop-blur-xl border-2 border-white/20 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-linear-to-r from-red-400/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-400/20 rounded-lg border border-red-400/30">
                <Bot className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  AI Assistant
                </h3>
                <p className="text-white/60 text-xs">Powered by Gemini</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-red-400" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 md:p-4 ${
                    message.role === "user"
                      ? "bg-red-400/20 border border-red-400/30 text-white"
                      : "bg-white/5 border border-white/10 text-white/90"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-red-400" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 md:p-6 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 md:py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 text-sm md:text-base disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 md:py-3 bg-red-400 hover:bg-red-500 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-400/30 flex items-center justify-center"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <p className="text-white/40 text-xs mt-2 text-center">
              Press Enter to send
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
