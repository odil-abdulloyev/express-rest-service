import { log } from '../logger/log';

export const uncaughtErrorHandler = (err: Error): void => {
  log('error.log', JSON.stringify(err.stack), { sync: true, console: true });
  process.exit(1);
};
