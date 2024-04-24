import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateMessage, clearMessage } from '../reducers/userReducer';
import { loadOneNew } from '../reducers/messagesReducer';
import { sendMessage } from '../api/async';
import InputText from './InputText';
import { ChangeEvent } from 'react';

const Input: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);
  const userMessage = useSelector((state: RootState) => state.user.userMessage);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateMessage(event.target.value));
  };

  const handleClick = () => {
    console.log('button clicked');
    console.log(`Username: ${username}`);
    console.log(`message: ${userMessage}`);
    console.log('sending message...');
    sendMessage(username, userMessage)
      .then((result) => {
        if (!result) {
          console.error('error sending message');
        } else {
          dispatch(loadOneNew(result));
        }
      })
      .catch(() => {
        console.error('error sending message');
      });
    // load one new
    dispatch(clearMessage());
    console.log('message sent from handleClick');
  };

  return (
    <div className='input'>
      <InputText content={userMessage} handleChange={handleChange} />
      <button onClick={handleClick} className='send-button'></button>
    </div>
  );
};

export default Input;
