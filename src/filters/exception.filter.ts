import { Catch, ExceptionFilter as NestJSExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { log } from '../logger/log';

@Catch()
export class ExceptionFilter implements NestJSExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const { url, method } = request;
    log('error.log', `${JSON.stringify(exception.stack)}\n`, { sync: true });
    response.status(statusCode).json({
      url,
      method,
      statusCode,
      error: exception.message
    });
  }
}
