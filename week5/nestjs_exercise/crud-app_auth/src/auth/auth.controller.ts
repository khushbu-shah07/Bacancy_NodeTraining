import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createAuthDto: CreateAuthDto): Promise<{ token: string }> {
    return this.authService.signUp(createAuthDto);
  }

  @Post('/login')
  login(
    @Body() updateAuthDto: Partial<CreateAuthDto>,
  ): Promise<{ token: string }> {
    return this.authService.login(updateAuthDto);
  }
}
