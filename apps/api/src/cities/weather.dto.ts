import { IsDate, IsInt, IsNumber, IsString } from 'class-validator';
import { Column, ManyToOne } from 'typeorm';
export class WeatherDto {

  @IsInt()
  id: number;

  @IsString()
  city: string;

  @IsDate()
  day: Date;

  @IsNumber()
  temperature: number;

  @IsNumber()
  pressure: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  wind: number;
}
