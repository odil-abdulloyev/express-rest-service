import { Injectable } from '@nestjs/common';

interface IRunningInfo {
  message: string
}

@Injectable()
export class AppService {
  runningInfo: IRunningInfo = { message: 'Service is running' };

  sendInfo(): IRunningInfo {
    return this.runningInfo;
  }
}