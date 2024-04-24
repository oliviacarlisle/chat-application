import { useState } from 'react';
import InputText from './InputText';
import { ChangeEvent } from 'react';

const url = '/api/messages';

const sendMessage = (text: string) => {
  if (text.length > 0) {
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
      .then((data) => {
        console.log(data);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }
};

const Input: React.FC = () => {
  const [content, setContent] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
