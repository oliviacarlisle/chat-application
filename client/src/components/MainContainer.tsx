import { useEffect } from 'react';
import { login } from '../reducers/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import ChatContainer from './ChatContainer';
import LoginContainer from './LoginContainer';

const Main: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // check local storage for display name
    const displayName = localStorage.getItem('displayName');
    if (displayName) {
      dispatch(login(displayName));
    }
  }, []);

  return (
    <div className='main-container'>{isLoggedIn ? <ChatContainer /> : <LoginContainer />}</div>
  );
};

export default Main;
