import dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',
  host: process.env['PGHOST'],
  port: process.env['PGPORT'],
  username: process.env['PGUSER'],
  password: process.env['PGPASSWORD'],
  database: process.env['PGDATABASE'],
  synchronize: true,
  logging: false,
  entities: ['entity/**/*.ts'],
  migrations: ['migration/**/*.ts'],
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'entity',
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
};
