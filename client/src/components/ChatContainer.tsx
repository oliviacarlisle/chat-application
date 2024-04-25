import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadOneNew } from '../reducers/messagesReducer';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatContainer: React.FC = () => {
  const WSS_URL = 'ws://localhost:3000';
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('opening websocket');
    const ws = new WebSocket(WSS_URL);

    ws.onopen = () => {
      console.log('WebSocket connection opened');
      ws.send(JSON.stringify({ type: 'log', payload: 'Hello, server!' }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Server says:', data.payload);
      if (data.type === 'broadcast') {
        dispatch(loadOneNew(data.payload));
      }
      // ws.send(JSON.stringify({ type: 'log', payload: 'Message received' }));
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }, []);

  return (
    <div className='chat-container'>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
