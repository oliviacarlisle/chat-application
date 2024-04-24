import { useState, useEffect } from 'react';
import ChatContainer from './ChatContainer';
import LoginContainer from './LoginContainer';

const Main: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [displayName, setDisplayName] = useState('');

  return (
    <div className='main-container'>{isLoggedIn ? <ChatContainer /> : <LoginContainer />}</div>
  );
};

export default Main;
