import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Auth } from '../../auth/schema/auth.schema';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Schema({
  timestamps: true,
})
export class User {
  [x: string]: any;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, match: /^[0-9]{10}$/, unique: true })
  phoneNumber: string;

  @Prop({ required: true, enum: Object.values(Gender) })
  gender: Gender;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Auth' })
  auth_user: Auth;
}

export const UserSchema = SchemaFactory.createForClass(User);
