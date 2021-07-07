import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import YAML from 'yamljs';
import path from 'path';
import { SwaggerModule } from '@nestjs/swagger';
import config from './common/config';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: create admin
  const { PORT } = config;
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('doc', app, swaggerDocument);
  await app.listen(Number(PORT) || 4000).then(() => process.stdout.write(`App is running on http://localhost:${PORT}\n`));
}

bootstrap();
