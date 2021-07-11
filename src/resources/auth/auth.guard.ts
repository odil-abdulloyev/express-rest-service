import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const scheme = request.headers.authorization?.split(' ')[0];
    const sessionToken = request.headers.authorization?.split(' ')[1];
    if (scheme !== 'Bearer' || !sessionToken) {
      throw new UnauthorizedException('No token provided');
    }
    request.user = await this.jwtService.verifyAsync(sessionToken);
    return true;
  }
}
