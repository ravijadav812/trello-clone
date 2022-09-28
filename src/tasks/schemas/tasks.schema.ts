import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Stage } from 'src/stage/schemas/stage.schema';

export type TasksDocument = Tasks & Document;

@Schema()
export class Tasks {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, ref: Stage.name })
  stageId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  createdAt: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
