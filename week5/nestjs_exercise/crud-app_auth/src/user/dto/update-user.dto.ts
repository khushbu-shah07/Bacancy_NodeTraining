import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsEmpty, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { Gender } from '../schema/user.schema';
import { Auth } from 'src/auth/schema/auth.schema';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // readonly name: string;
  // readonly age: number;
  // readonly email: string;
  // readonly phoneNumber: string;
  // readonly gender: Gender;

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsInt()
  readonly age: number;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly phoneNumber: string;

  @IsOptional()
  @IsEnum(Gender)
  readonly gender: Gender;

  @IsEmpty({ message: 'You cannot pass userId' })
  readonly auth_user: Auth;
}
