import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import createErrorData from '../utils/create-error-data';

const uncaughtErrorHandler = (err: Error): void => {
  const dir = path.join(__dirname, '../../logs');
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  writeFileSync(path.join(__dirname, '../../logs/errors.log'), createErrorData(err), { 'flag': 'a' });
};

export default uncaughtErrorHandler;
