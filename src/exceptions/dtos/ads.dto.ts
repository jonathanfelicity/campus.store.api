import { IsString } from 'class-validator';

export class CreateAdDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;


}
