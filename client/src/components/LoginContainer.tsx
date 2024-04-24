import { useState, useEffect } from 'react';

const LoginContainer: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div>Welcome</div>
        <input placeholder='Display name'></input>
      </div>
    </div>
  );
};

export default LoginContainer;
