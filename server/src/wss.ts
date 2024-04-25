import { wss } from './server.js';

export const broadcast = (message) => {
  const data = {
    type: 'broadcast',
    payload: message,
  };

  wss.clients.forEach((client) => client.send(JSON.stringify(data)));
};
