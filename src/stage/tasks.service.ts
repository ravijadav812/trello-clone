import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StageDto } from './dto/stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage, StageDocument } from './schemas/stage.schema';

@Injectable()
export class StageService {
  constructor(
    @InjectModel(Stage.name) private readonly model: Model<StageDocument>,
  ) {}

  async findAll(): Promise<Stage[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Stage> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: StageDto): Promise<Stage> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateStageDto): Promise<Stage> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Stage> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
