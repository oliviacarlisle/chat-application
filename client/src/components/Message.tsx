import { isEmoji, allEmojis } from '../utils/emoji';
import React from 'react';
import Emoji from './Emoji';

interface MessageItemProps {
  username: string;
  sender: string;
  message: string;
  id: string;
}

const MessageItem: React.FC<MessageItemProps> = ({
  id,
  username,
  sender,
  message,
  previousMsg,
}) => {
  const self = username === sender;
  const followUp = previousMsg ? sender === previousMsg.sender : false;

  const { len, allPass } = allEmojis(message);
  const emojiClass = len <= 3 && allPass ? 'xl-emoji' : 'emoji';

  const formattedMessage = [];
  let i = 0;
  for (const codePoint of message) {
    const cp = codePoint.codePointAt(0);
    if (isEmoji(cp)) {
      formattedMessage.push(
        <Emoji key={`${id}-${i.toString()}`} type={emojiClass} char={String.fromCodePoint(cp)} />,
      );
    } else {
      formattedMessage.push(
        // <Emoji key={`${id}-${i.toString()}`} type={''} char={String.fromCodePoint(cp)} />,
        String.fromCodePoint(cp),
      );
    }
    i++;
  }
  console.log(message, allEmojis(message));

  const msgStyle = {
    alignSelf: self ? 'flex-end' : 'flex-start',
    marginTop: followUp ? '0.1rem' : '0.5rem',
  };

  const senderStyle = {
    display: self || followUp ? 'none' : 'block',
  };

  const textStyle =
    len <= 3 && allPass
      ? {
          background: 'none',
        }
      : self
        ? {
            backgroundColor: '#147efb',
            color: 'white',
          }
        : {};

  // if (self) {
  //   if (len <= 3 && allPass) {
  //     const textStyle = {
  //       backgroundColor: 'none',
  //     };
  //   } else {
  //     const textStyle = {
  //       backgroundColor: '#147efb',
  //       color: 'white';
  //     };
  //   }
  // } else {
  //   if (len <= 3 && allPass) {
  //     const textStyle = {
  //       backgroundColor: 'none',
  //     };
  //   } else {
  //     const textSyle = {};
  //   }
  // }

  return (
    <div className='msg' style={msgStyle}>
      <div className='msg-sender' style={senderStyle}>
        {sender}
      </div>
      <div className='msg-text-wrapper'>
        <div className='msg-text' style={textStyle}>
          {formattedMessage}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
