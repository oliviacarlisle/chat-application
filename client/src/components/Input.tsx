import { useState, useEffect } from 'react';
import InputText from './InputText';

const url = '/api/messages';

const sendMessage = (text: string) => {
  if (typeof text === 'string' && text.length > 0) {
    const body = {
      message: text,
      sender: 'Olivia',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
};

const Input: React.FC = () => {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = () => {
    console.log('button clicked');
    console.log(content);
    sendMessage(content);
    setContent('');
  };

  return (
    <div className='input'>
      <InputText content={content} handleChange={handleChange} />
      <button onClick={handleClick} className='send-button'></button>
    </div>
  );
};

export default Input;
