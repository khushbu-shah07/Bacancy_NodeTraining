import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Req() req,
  ): Promise<User> {
    return this.userService.create(createUserDto, req.auth_user);
  }

  @Put(`:id`)
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ): Promise<User> {
    return this.userService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
