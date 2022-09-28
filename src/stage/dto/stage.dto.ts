import { IsString, IsNotEmpty } from 'class-validator';
export class StageDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
