"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const ChatSection = () => {
  const [disabled, isDisabled] = useState(true)
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
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: 'This is a simulated AI response.' },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {!disabled ? <>
      <header className="flex items-center justify-between px-4 py-2 border-b fixed w-screen top-0">
        <h1 className="text-lg font-semibold">Chat Room</h1>
        <Button size="sm" variant="outline">
          Leave Chat
        </Button>
      </header>
      <main className="flex-1 overflow-y-auto px-4 mt-16 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-end ${message.sender === 'user' ? 'justify-end' : ''} space-x-2`}>
            {message.sender === 'ai' && (
              <Avatar>
                <AvatarImage alt="AI Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
              <p className="text-sm">{message.text}</p>
            </div>
            {message.sender === 'user' && (
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </main>
      <footer className="flex justify-center fixed bottom-0 w-screen items-center border-t p-4">
        <Input
          className="flex-1 mx-8"
          placeholder="Type a message"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button size="sm" variant="outline" className='mx-4 text-black' onClick={handleSendMessage}>
          Send
        </Button>
      </footer>
      </> : <>Currently in Development Mode</>}
    </div>
  );
};

export default ChatSection;
