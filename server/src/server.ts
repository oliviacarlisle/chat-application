import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import apiRouter from './routes/api.js';

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port.toString()}`);
});
