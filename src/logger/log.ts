import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';

interface LoggingOptions {
  sync?: boolean,
  console?: boolean
}

export const log = (filename: string, data: string, options: LoggingOptions = {
  sync: false,
  console: false
}): void => {
  const dirname = 'logs';
  if (!existsSync(dirname)) {
    mkdirSync(dirname);
  }
  const filepath = `${dirname}/${filename}`;
  if (options.sync) {
    writeFileSync(filepath, data, { flag: 'a' });
  } else {
    const ws = createWriteStream(filepath, { flags: 'a' });
    ws.write(data, (error) => {
      if (error) {
        process.stderr.write(error.message);
      }
    });
  }
  if (options.console) {
    process.stdout.write(data, (error) => {
      if (error) {
        process.stderr.write(error.message);
      }
    });
  }
};
