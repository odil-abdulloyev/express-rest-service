import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './common/config';
import app from './app';
import ormconfig from './ormconfig';
import * as userService from './resources/users/user.service';
import IUser from './types/iuser';

const { PORT } = config;

createConnection(ormconfig).then(async (connection) => {
  await connection.runMigrations();
  await userService.create({name: 'Odil', login: 'admin', password: 'admin'} as IUser);
  app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT}\n`)
  );
}).catch((error: Error) => process.stderr.write(error.message));

