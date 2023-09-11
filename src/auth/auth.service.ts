import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FuqarolarService } from 'src/fuqarolar/fuqarolar.service';

@Injectable()
export class AuthService {
  constructor(
    private fuqaroService: FuqarolarService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, phone) {
    const user = await this.fuqaroService.findName(username);
    if (user?.phone !== phone) {
      throw new UnauthorizedException();
    }

    return {
      token: await this.jwtService.signAsync({ _id: user._id }),
    };
  }
}
