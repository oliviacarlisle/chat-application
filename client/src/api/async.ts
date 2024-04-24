const URL = '/api/messages';

export interface Message {
  sender: string;
  message: string;
  createdAt: string;
  id: string;
}

const validateMessages = (input: Message[]): boolean => {
  if (!Array.isArray(input)) return false;
  return input.every(
    (message) =>
      typeof message === 'object' &&
      typeof message.sender === 'string' &&
      typeof message.message === 'string' &&
      typeof message.createdAt === 'string' &&
      typeof message.id === 'string',
  );
};

export const getMessages = (): Promise<Message[] | undefined> =>
  fetch(URL)
    .then((data) => data.json())
    .then((list: Message[]) => {
      if (!validateMessages(list)) {
        console.error('Error validating messages');
        return undefined;
      } else {
        return list;
      }
    })
    .catch(() => {
      console.error('Error retrieving messages');
      return undefined;
    });

export const sendMessage = (username: string, text: string): Promise<Message | undefined> => {
  if (text.length > 0) {
    const body = {
      message: text,
      sender: username,
    };

    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((msg: Message) => {
        if (!validateMessages([msg])) {
          console.error('Error validating messages');
          return undefined;
        } else {
          return msg;
        }
      })
      .catch(() => undefined);
  } else {
    return Promise.resolve(undefined);
  }
};
