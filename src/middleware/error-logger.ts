import { NextFunction, Request, Response } from 'express';
import createErrorData from '../utils/create-error-data';
import logToFile from '../utils/log-to-file';

const errorLogger = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  logToFile('errors.log', createErrorData(err), false);
  return res.status(500).send('Internal Server Error');
};

export default errorLogger;
