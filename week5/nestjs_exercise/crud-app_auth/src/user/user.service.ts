import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Auth } from '../auth/schema/auth.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.UserModel.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) throw new BadRequestException('Please enter correct ID');

    const users = await this.UserModel.findById(id);
    if (!users) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return users;
  }

  async create(user: User, auth_user: Auth): Promise<User> {
    const data = Object.assign(user, { auth_user: user._id });
    const newUser = new this.UserModel(data);
    const result = await newUser.save();
    return result;
  }

  async updateById(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User> {
    const updatedUser = await this.UserModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true, runValidators: true },
    );
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser;
  }

  async deleteById(id: string): Promise<User> {
    return await this.UserModel.findByIdAndDelete(id);
  }
}
