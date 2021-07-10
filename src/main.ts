import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import YAML from 'yamljs';
import path from 'path';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import config from './common/config';
import { AppModule } from './resources/app/app.module';
import { ExceptionFilter } from './filters/exception.filter';
import { uncaughtErrorHandler } from './error-handlers/uncaught-error-handler';

async function bootstrap() {
  const useFastify = process.env['USE_FASTIFY'] === 'true';
  const app = useFastify
    ? await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    )
    : await NestFactory.create(AppModule);
  const { PORT } = config;
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('doc', app, swaggerDocument);
  app.useGlobalFilters(new ExceptionFilter());
  await app
    .listen(Number(PORT) || 4000)
    .then(() =>
      process.stdout.write(`App is running on http://localhost:${PORT}\n`)
    );
}

process
  .on('uncaughtException', (error: Error) => uncaughtErrorHandler(error))
  .on('unhandledRejection', (error: Error) => uncaughtErrorHandler(error));

bootstrap();
