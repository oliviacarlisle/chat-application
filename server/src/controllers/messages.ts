import Message from '../models/messagesModel.js';
import type { Request, Response, NextFunction } from 'express';
import type { ExpressError } from '../types/errors.js';

interface PostMessageRequest extends Request {
  body: {
    sender: string;
    message: string;
  };
}

interface Message {
  sender: string;
  message: string;
  createdAt: Date;
  id: string;
}

export const getMessages = (req: Request, res: Response, next: NextFunction): void => {
  Message.find({})
    .then((messages) => {
      res.locals.messages = messages.map(
        ({ sender, message, createdAt, _id }): Message => ({
          sender,
          message,
          createdAt,
          id: _id.toString(),
        }),
      );
      next();
    })
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error(error);
      const err: ExpressError = {
        message: 'Database error',
        status: 500,
        log: 'Error retrieving messages from database',
      };
      next(err);
    });
};

export const postMessage = (req: PostMessageRequest, res: Response, next: NextFunction): void => {
  const { sender, message } = req.body;

  if (typeof sender !== 'string' || typeof message !== 'string') {
    const err: ExpressError = {
      message: 'Invalid request',
      status: 400,
      log: 'Invalid POST request',
    };
    next(err);
    return;
  }

  Message.create({ sender, message })
    .then((newMessage) => {
      console.log(newMessage);

      const { sender, message, createdAt, _id } = newMessage;

      res.locals.newMessage = {
        sender,
        message,
        createdAt,
        id: _id.toString(),
      };

      next();
    })
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error(error);
      const err: ExpressError = {
        message: 'Database error',
        status: 500,
        log: 'Error creating message in database',
      };
      next(err);
    });
};
