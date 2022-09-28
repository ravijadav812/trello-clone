import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tasks, TasksSchema } from './schemas/tasks.schema';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
  ],
})
export class TasksModule {}
