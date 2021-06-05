import path from 'path';
import { createWriteStream } from 'fs';
import { Request, Response, NextFunction } from 'express';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { url, query, body, method } = req;
  const { statusCode } = res;
  const chunk = `
URL: ${url}
Method: ${method}
Query parameters: ${JSON.stringify(query)}
Body: ${JSON.stringify(body)}
Status code: ${statusCode}
  `;
  const ws = createWriteStream(path.join(__dirname, '../../logs/info.log'), { 'flags': 'a' });
  ws.write(chunk, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
  next();
}

export { requestLogger };
