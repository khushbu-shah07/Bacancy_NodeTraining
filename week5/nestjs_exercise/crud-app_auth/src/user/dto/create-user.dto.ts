import { IsEmail, IsEmpty, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Gender } from '../schema/user.schema';
import { Auth } from 'src/auth/schema/auth.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsInt()
  readonly age: number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  readonly gender: Gender;

  @IsEmpty({message: 'You cannot pass userId'})
  readonly auth_user: Auth;
}
