import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Auth } from './schema/auth.schema';
import { JWT_SECRET } from './auth.module';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Auth.name)
    private AuthModel: Model<Auth>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;

    const user = await this.AuthModel.findById(id);

    if (!user) {
      throw new UnauthorizedException('Login first to access this endpoint ');
    }
    return user;
  }
}
