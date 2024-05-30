"use client"
import React, { useState } from 'react';

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hi, how can I help you today?' },
    { sender: 'ai', text: 'Hello! I need some information on your services.' },
    { sender: 'user', text: 'Sure, what do you need to know?' },
    { sender: 'ai', text: 'Can you tell me about your pricing?' },
  ]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: 'This is a simulated AI response.' },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (e : any) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e : any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 rounded-lg">
      <div className="flex flex-col space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-2xl max-w-xs ${
              msg.sender === 'user' ? 'self-end bg-green-200 text-green-900' : 'self-start bg-gray-200 text-gray-900'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 w-full space-x-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="p-2 border border-gray-300 rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
