import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from '../ormconfig';
import { BoardsModule } from '../resources/boards/boards.module';
import { TasksModule } from '../resources/tasks/tasks.module';
import { UsersModule } from '../resources/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { RequestLogger } from '../middleware/request-logger';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    BoardsModule,
    TasksModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLogger).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}
