import { NextFunction, Request, Response } from 'express';
import logToFile from '../utils/log-to-file';

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
    logToFile('info.log', `${JSON.stringify(logData)}\n`, false);
  });
  next();
};

export default requestLogger;
