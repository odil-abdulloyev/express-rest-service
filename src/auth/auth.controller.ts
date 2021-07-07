import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async signIn(@Body() authDto: AuthDto): Promise<{token: string}> {
    return this.authService.signIn(authDto);
  }
}