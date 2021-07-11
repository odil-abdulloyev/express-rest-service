import { NextFunction, Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from '../logger/log';

@Injectable()
export class RequestLogger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { originalUrl, query, body, method } = req;
    res.on('finish', () => {
      const logData = {
        'URL': originalUrl,
        'Method': method,
        'Query parameters': query,
        'Request body': body,
        'Status code': res.statusCode
      };
      log('info.log', `${JSON.stringify(logData)}\n`);
    });
    next();
  }
}
