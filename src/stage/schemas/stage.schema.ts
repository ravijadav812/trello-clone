import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StageDocument = Stage & Document;

@Schema()
export class Stage {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const StageSchema = SchemaFactory.createForClass(Stage);
