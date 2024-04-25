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

  let previousMsg = null;
  const msgList = messages.map((m, idx) => {
    if (idx > 0) previousMsg = messages[idx - 1];

    return (
      <MessageItem
        key={m.id}
        username={username}
        sender={m.sender}
        message={m.message}
        id={m.id}
        previousMsg={previousMsg}
      />
    );
  });

  return (
    <div ref={containerRef} className='chat-messages'>
      {/* <div className='blank-space'></div> */}
      {msgList}
    </div>
  );
};

export default ChatMessages;
