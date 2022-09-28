import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Stage, StageSchema } from './schemas/stage.schema';
import { StageController } from './stage.controller';
import { StageService } from './tasks.service';

@Module({
  providers: [StageService],
  controllers: [StageController],
  imports: [
    MongooseModule.forFeature([{ name: Stage.name, schema: StageSchema }]),
  ],
})
export class StageModule {}
