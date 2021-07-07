import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env['PGHOST'],
  port: Number(process.env['PGPORT']),
  username: process.env['PGUSER'],
  password: process.env['PGPASSWORD'],
  database: process.env['PGDATABASE'],
  migrationsRun: true,
  synchronize: false,
  logging: false,
  entities: ['build/**/*.entity{.ts,.js}'],
  migrations: ['build/migration/**/*.js'],
  uuidExtension: 'pgcrypto',
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

export = ormconfig;
