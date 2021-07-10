import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { TokenDto } from './dto/token.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post()
  async signIn(@Body() authDto: AuthDto): Promise<TokenDto> {
    return this.authService.signIn(authDto);
  }
}
