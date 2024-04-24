import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { scrollToBottom } from '../effects/visuals';
import MessageItem from './Message';
import { getMessages } from '../api/async';
import { loadMessages } from '../reducers/messagesReducer';

const ChatMessages: React.FC = () => {
  const messages = useSelector((state: RootState) => state.messages.list);
  const username = useSelector((state: RootState) => state.user.username);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom(containerRef);
  }, [messages]);

  useEffect(() => {
    getMessages()
      .then((list) => {
        if (list) {
          dispatch(loadMessages(list));
        }
      })
      .catch(() => {
        console.log('Error loading messages');
      });
  }, []);

  const msgList = messages.map((m) => (
    <MessageItem key={m.id} username={username} sender={m.sender} message={m.message} />
  ));

  return (
    <div ref={containerRef} className='chat-messages'>
      {msgList}
    </div>
  );
};

export default ChatMessages;
