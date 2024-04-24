import { useState, useEffect, useRef } from 'react';
import Message from './Message';

interface Message {
  sender: string;
  message: string;
  createdAt: string;
  id: string;
}

const validateMessages = (input: Message[]): boolean => {
  if (!Array.isArray(input)) return false;
  return input.every(
    (message) =>
      typeof message === 'object' &&
      typeof message.sender === 'string' &&
      typeof message.message === 'string' &&
      typeof message.createdAt === 'string' &&
      typeof message.id === 'string',
  );
};

const ChatMessages: React.FC = () => {
  const url = '/api/messages';
  const [messages, setMessages] = useState<Message[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access scrollTop and scrollHeight of the container when the component is mounted
    const container = containerRef.current;

    if (container) {
      container.style.overflowY = 'hidden';
      // scroll to bottom
      container.scrollTop = container.scrollHeight;
      container.style.overflowY = 'auto';
    }
  }, [messages]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((list: Message[]) => {
        if (!validateMessages(list)) {
          throw new Error('Error retrieving messages');
        }
        setMessages(list);
      })
      .catch(() => {
        console.error('Error retrieving messages');
      });
  }, []);

  const msgList = messages.map((m) => <Message key={m.id} sender={m.sender} message={m.message} />);

  return (
    <div ref={containerRef} className='chat-messages'>
      {msgList}
    </div>
  );
};

export default ChatMessages;
