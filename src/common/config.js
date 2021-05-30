import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import path, { dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export default {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true'
};
