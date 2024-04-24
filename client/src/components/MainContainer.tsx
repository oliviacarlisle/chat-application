import { useState } from 'react';
import ChatContainer from './ChatContainer';
import LoginContainer from './LoginContainer';

const Main: React.FC = () => {
  const [isLoggedIn, _setIsLoggedIn] = useState(true);

  return (
    <div className='main-container'>{isLoggedIn ? <ChatContainer /> : <LoginContainer />}</div>
  );
};

export default Main;
