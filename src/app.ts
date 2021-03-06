import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import loginRouter from './resources/login/login.router';
import errorLogger from './middleware/error-logger';
import requestLogger from './middleware/request-logger';
import uncaughtErrorHandler from './error-handlers/uncaught-error-handler';
import validateAuth from './middleware/validate-auth';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({extended: true}) as RequestHandler);
app.use(requestLogger);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);

app.use(validateAuth);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks', taskRouter);

app.use(errorLogger);

process.on('uncaughtException', (err: Error) => {
  uncaughtErrorHandler(err);
  process.exit(1);
});

process.on('unhandledRejection', (err: Error) => {
  uncaughtErrorHandler(err);
  process.exit(1);
});

export default app;
