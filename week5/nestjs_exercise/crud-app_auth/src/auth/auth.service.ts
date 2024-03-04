import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Auth } from './schema/auth.schema';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private readonly AuthModel: mongoose.Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async signUp(createAuthDto: CreateAuthDto): Promise<{ token: string }> {
    const { user_name, user_email, password } = createAuthDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const new_user = await this.AuthModel.create({
      user_name,
      user_email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: new_user._id });
    return { ...new_user, token };
  }

  async login(updateAuthDto: Partial<CreateAuthDto>): Promise<{ token: string }> {
    const { user_email, password } = updateAuthDto;

    const user = await this.AuthModel.findOne({ user_email }).exec();

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials or email and password',
      );
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = this.jwtService.sign({ id: user._id });
    return { ...user, token };
  }
}
