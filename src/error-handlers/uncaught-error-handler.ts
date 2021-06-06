import createErrorData from '../utils/create-error-data';
import logToFile from '../utils/log-to-file';

const uncaughtErrorHandler = (err: Error): void => {
  logToFile('errors.log', createErrorData(err), true);
};

export default uncaughtErrorHandler;
