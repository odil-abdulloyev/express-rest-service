import { Controller, Get } from '@nestjs/common';
import { AppService, RunningInfo } from './app.service';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  sendInfo(): RunningInfo {
    return this.appService.sendInfo();
  }
}
