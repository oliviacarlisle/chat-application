import { useState, useEffect } from 'react';

const Message: React.FC = ({ sender, message }) => {
  const self = 'Olivia' === sender;

  const msgStyle = {
    alignSelf: self ? 'flex-end' : 'flex-start',
  };

  const senderStyle = {
    display: self ? 'none' : 'block',
  };

  const textStyle = {
    backgroundColor: '#147efb',
    color: 'white',
  };

  return (
    <div className='msg' style={msgStyle}>
      <div className='msg-sender' style={senderStyle}>
        {sender}
      </div>
      <div className='msg-text' style={self ? textStyle : {}}>
        {message}
      </div>
    </div>
  );
};

export default Message;
