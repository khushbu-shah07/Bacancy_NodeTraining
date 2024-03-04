import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Auth extends Document{
  @Prop({ required: true })
  user_name: string;

  @Prop({ required: true, unique: true, validate: /\S+@\S+\.\S+/ })
  user_email: string;

  @Prop({ required: true, unique: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
