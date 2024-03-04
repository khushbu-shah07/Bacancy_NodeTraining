import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateAuthDto) {
  // readonly user_name: string;
  // readonly user_email: string;
  // readonly password: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly user_email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
