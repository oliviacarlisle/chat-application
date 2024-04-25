import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import apiRouter from './routes/api.js';
import http from 'node:http';
import { WebSocketServer } from 'ws';

// Import types
import type { Request, Response, NextFunction } from 'express';
import type { ExpressError } from './types/errors.ts';

const MONGOOSE_URI = process.env.MONGOOSE_URI;
if (MONGOOSE_URI === undefined) {
  throw new Error('Could not read .env config file');
}

const app = express();

mongoose
  .connect(MONGOOSE_URI)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Successfully connected to DB');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error('DB connection unsuccessful');
  });

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.static(path.resolve('client/dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

app.use('/api', apiRouter);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err: ExpressError, req: Request, res: Response, _next: NextFunction): void => {
  const defaultErr: ExpressError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  const errObj = { ...defaultErr, ...err };
  // eslint-disable-next-line no-console
  console.error(errObj.log);
  res.status(errObj.status).json({ err: errObj.message });
});

// Create the HTTP server with Express
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Express server listening on port ${port.toString()}`);
});

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Listening on port ${port.toString()}`);
// });

function heartbeat() {
  this.isAlive = true;
}

export const wss = new WebSocketServer({ server });

wss.on('listening', () => {
  console.log('websocket server listening');
});

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
  ws.isAlive = true;
  ws.on('pong', heartbeat);

  ws.on('error', console.error);

  // Set up event listeners for the WebSocket
  ws.on('message', (message) => {
    try {
      // Convert the received message to a string (if it's a buffer)
      const messageStr = message.toString();

      // Parse the string to JSON
      const jsonData = JSON.parse(messageStr);

      console.log('Received JSON:', jsonData);

      // // Respond with a modified message
      // const response = {
      //   reply: `Hello, ${jsonData.message}`,
      //   receivedAt: new Date().toISOString(),
      // };

      ws.send(JSON.stringify({ type: 'log', payload: 'Received' }));
    } catch (error) {
      console.error('Error parsing message:', error);

      // Send an error response
      ws.send(JSON.stringify({ type: 'error', payload: 'Invalid message format' }));
    }
  });

  // Optionally send a welcome message when a new client connects
  ws.send(JSON.stringify({ type: 'log', payload: 'Success' }));
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 10000);

wss.on('close', function close() {
  clearInterval(interval);
});
