import { useState, useEffect } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatContainer: React.FC = () => {
  const [state, setState] = '';

  return (
    <div className="chat-container">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
