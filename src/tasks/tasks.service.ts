import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TasksDto } from './dto/tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { Tasks, TasksDocument } from './schemas/tasks.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name) private readonly model: Model<TasksDocument>,
  ) {}

  async findAll(): Promise<Tasks[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Tasks> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: TasksDto): Promise<Tasks> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTasksDto): Promise<Tasks> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Tasks> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
