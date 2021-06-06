import { NextFunction, Request, Response } from 'express';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import path from 'path';
import createErrorData from '../utils/create-error-data';

const errorLogger = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  const dir = path.join(__dirname, '../../logs');
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const ws = createWriteStream(path.join(__dirname, '../../logs/errors.log'), { 'flags': 'a' });
  ws.write(createErrorData(err), (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  return res.status(500).send('Internal Server Error');
};

export default errorLogger;
