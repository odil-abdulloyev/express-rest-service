import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './common/config';
import app from './app';
import ormconfig from './ormconfig';
import * as userService from './resources/users/user.service';
import IUser from './types/iuser';
import User from './entity/user';

const { PORT } = config;

createConnection(ormconfig).then(async (connection) => {
  await connection.runMigrations();
  if (!await User.findOne({login: 'admin'})) {
    await userService.create({name: 'Admin', login: 'admin', password: 'admin'} as IUser);
  }
  app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT}\n`)
  );
}).catch((error: Error) => process.stderr.write(error.message));

