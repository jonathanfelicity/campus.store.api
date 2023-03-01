import { IsString, IsNumber } from 'class-validator';

export class CreateAdDto {

  @IsNumber()
  public adman: number
  
  @IsString()
  public title: string;

  @IsNumber()
  public price: number;

  @IsNumber()
  public is_negotiable: boolean;

  @IsString()
  public description: string;


}
