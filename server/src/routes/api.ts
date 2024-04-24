import express from 'express';
import { getMessages, postMessage } from '../controllers/messages.js';

const router = express.Router();

// Define your routes
router.get('/', (req, res): void => {
  // eslint-disable-next-line no-console
  console.log('Received a GET request on the api route!');
  res.json({ content: 'Hello from the api route!' });
});

router.get('/messages', getMessages, (req, res): void => {
  console.log('Received GET request at /api/messages');
  res.json(res.locals.messages);
});

router.post('/messages', postMessage, (req, res): void => {
  console.log('Received POST request at /api/messages');
  res.json(res.locals.newMessage);
});

export default router;
