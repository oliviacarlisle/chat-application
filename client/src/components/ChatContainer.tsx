import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatContainer: React.FC = () => (
  <div className='chat-container'>
    <ChatMessages />
    <ChatInput />
  </div>
);

export default ChatContainer;
