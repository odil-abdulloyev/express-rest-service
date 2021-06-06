import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { errorLogger, requestLogger, uncaughtExceptionLogger, unhandledRejectionLogger } from './middleware/loggers';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(requestLogger);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks', taskRouter);

app.use(errorLogger);

process.on('uncaughtException', (err: Error) => {
  uncaughtExceptionLogger(err);
  process.exit(1);
});

process.on('unhandledRejection', (err: Error) => {
  unhandledRejectionLogger(err);
  process.exit(2);
});

export default app;
