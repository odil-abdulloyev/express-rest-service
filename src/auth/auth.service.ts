import { ForbiddenException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async signIn(authDto: AuthDto): Promise<TokenDto> {
    const { login, password } = authDto;
    const user = await this.userService.findByLogin(login);
    if (user) {
      if (!await bcrypt.compare(password, user.password)) {
        throw new ForbiddenException('Invalid password');
      } else {
        const token = this.jwtService.sign({ login, password });
        return { token };
      }
    } else {
      throw new ForbiddenException('User not found');
    }
  }
}