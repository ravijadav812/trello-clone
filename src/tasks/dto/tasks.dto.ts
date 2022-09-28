import { IsNotEmpty, IsString } from 'class-validator';

export class TasksDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  stageId: string;
}
