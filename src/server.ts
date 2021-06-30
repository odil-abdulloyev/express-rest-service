import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import config from './common/config';
import app from './app';
import ormconfig from './ormconfig';

const { PORT } = config;

createConnection(ormconfig as ConnectionOptions).then(() => {
  app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT}\n`)
  );
}).catch((error: Error) => process.stderr.write(error.message));

