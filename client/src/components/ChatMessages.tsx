import { useState, useEffect, useRef } from 'react';
import Message from './Message';

interface Message {
  sender: string;
  message: string;
  createdAt: Date;
  id: string;
}

const ChatMessages: React.FC = () => {
  const url = '/api/messages';
  const [messages, setMessages] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    // Access scrollTop and scrollHeight of the container when the component is mounted
    const container = containerRef.current;

    if (container) {
      container.style.overflowY = 'hidden';
      // To scroll to the bottom on load
      container.scrollTop = container.scrollHeight;
      container.style.overflowY = 'auto';
    }
  }, [messages]);

  // const getMessages = () => {
  //   fetch(url)
  //     .then((data) => data.json())
  //     .then((list: Message[]) => {
  //       setMessages(list);
  //       setTimeout(getMessages, 2000);
  //     })
  //     .catch(() => {
  //       console.log('error retrieving messages');
  //     });
  // };

  // useEffect(getMessages, []);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((list: Message[]) => {
        setMessages(list);
      })
      .catch(() => {
        console.log('error retrieving messages');
      });
  }, [url]);

  const msgList = messages.map((m) => <Message key={m.id} sender={m.sender} message={m.message} />);

  return (
    <div ref={containerRef} className='chat-messages'>
      {msgList}
    </div>
  );
};

export default ChatMessages;
