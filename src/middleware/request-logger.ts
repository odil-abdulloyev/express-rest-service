import { NextFunction, Request, Response } from 'express';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import path from 'path';

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const { url, query, body, method } = req;
  res.on('finish', () => {
    const logData = {
      'URL': url,
      'Method': method,
      'Query parameters': query,
      'Request body': body,
      'Status code': res.statusCode
    };
    const dir = path.join(__dirname, '../../logs');
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    const ws = createWriteStream(path.join(__dirname, '../../logs/info.log'), { 'flags': 'a' });
    ws.write(`${JSON.stringify(logData)}\n`, (err) => {
      if (err) {
        console.log(err.message);
      }
    });
  });
  next();
};

export default requestLogger;
