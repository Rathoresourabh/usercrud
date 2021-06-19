import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNumber()
  points: number;

  @Prop()
  @IsNotEmpty()
  gender: 'male' | 'female';

  @Prop()
  @IsBoolean()
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
