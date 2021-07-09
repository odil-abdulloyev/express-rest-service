import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../resources/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env['JWT_SECRET_KEY'],
      signOptions: {
        expiresIn: '24h'
      }
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
