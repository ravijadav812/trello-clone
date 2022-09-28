import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StageDto } from './dto/stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { StageService } from './tasks.service';

@Controller('stage')
export class StageController {
  constructor(private readonly service: StageService) {}
  @Get()
  async index() {
    const allStages = await this.service.findAll();

    return allStages;
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: StageDto) {
    return await this.service.create(createTodoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateStageDto) {
    return await this.service.update(id, updateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
