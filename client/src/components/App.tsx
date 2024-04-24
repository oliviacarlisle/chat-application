import { useState, useEffect } from 'react';
import MainContainer from './MainContainer';

import type { Content } from '../../../types/api';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='outer-container'>
      <div className='header'>Conversations</div>
      <MainContainer />
      <div className='footer'>
        Made with ❤️ by <a href='https://github.com/oliviacarlisle'>Olivia Carlisle</a>
      </div>
    </div>
  );
};

export default App;
