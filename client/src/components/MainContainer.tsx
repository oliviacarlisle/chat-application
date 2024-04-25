import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, updateUsername } from '../reducers/userReducer';
import { RootState } from '../store';
import ChatContainer from './ChatContainer';
import LoginContainer from './LoginContainer';

const Main: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();

  const contentStyle = {
    justifyContent: 'center',
  };

  const handleChange = (event) => {
    dispatch(updateUsername(event.target.value));
  };

  const submitUsername = () => {
    if (username.length > 1) {
      localStorage.setItem('displayName', username);
      dispatch(login());
    }
  };

  useEffect(() => {
    // check local storage for display name on load
    const displayName = localStorage.getItem('displayName');
    if (displayName) {
      dispatch(updateUsername(displayName));
      dispatch(login());
    }
  }, []);

  return (
    <div className='main-container' style={isLoggedIn ? {} : contentStyle}>
      {isLoggedIn ? (
        <ChatContainer />
      ) : (
        <LoginContainer
          username={username}
          handleChange={handleChange}
          submitUsername={submitUsername}
        />
      )}
    </div>
  );
};

export default Main;
