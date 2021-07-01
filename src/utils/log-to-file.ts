import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';

const logToFile = (filename: string, data: string, sync: boolean): void => {
  const dirname = 'logs';
  if (!existsSync(dirname)) {
    mkdirSync(dirname);
  }
  const filepath = `${dirname}/${filename}`;
  if (sync) {
    writeFileSync(filepath, data, { 'flag': 'a' });
  } else {
    const ws = createWriteStream(filepath, { 'flags': 'a' });
    ws.write(data, (error) => {
      if (error) {
        process.stderr.write(error.message);
      }
    });
  }
}

export default logToFile;
