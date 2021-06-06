import path from 'path';
import { createWriteStream, writeFileSync, existsSync, mkdirSync } from 'fs';
import { Request, Response, NextFunction } from 'express';

const createLogsDir = (): void => {
  const dir = path.join(__dirname, '../../logs');
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
};

const createErrorData = (err: Error): string => {
  const { name, message, stack } = err;
  return `${JSON.stringify({ name, message, stack })}\n`;
};

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
    createLogsDir();
    const ws = createWriteStream(path.join(__dirname, '../../logs/info.log'), { 'flags': 'a' });
    ws.write(`${JSON.stringify(logData)}\n`, (err) => {
      if (err) {
        console.log(err.message);
      }
    });
  });
  next();
};

const errorLogger = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  createLogsDir();
  const ws = createWriteStream(path.join(__dirname, '../../logs/errors.log'), { 'flags': 'a' });
  ws.write(createErrorData(err), (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  return res.status(500).send('Internal Server Error');
};

const uncaughtExceptionLogger = (err: Error): void => {
  createLogsDir();
  writeFileSync(path.join(__dirname, '../../logs/errors.log'), createErrorData(err), { 'flag': 'a' });
};

const unhandledRejectionLogger = (err: Error): void => {
  createLogsDir();
  writeFileSync(path.join(__dirname, '../../logs/errors.log'), createErrorData(err), { 'flag': 'a' });
};

export { requestLogger, errorLogger, uncaughtExceptionLogger, unhandledRejectionLogger };
