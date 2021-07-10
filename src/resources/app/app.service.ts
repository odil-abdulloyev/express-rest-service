import { Injectable } from '@nestjs/common';

export interface RunningInfo {
  message: string
}

@Injectable()
export class AppService {
  runningInfo: RunningInfo = { message: 'Service is running' };

  sendInfo(): RunningInfo {
    return this.runningInfo;
  }
}