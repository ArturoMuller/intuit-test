import { IsDate, IsInt, IsNumber, IsString } from 'class-validator';
import { Column, ManyToOne } from 'typeorm';
import { CityDto } from './cities.dto';
export class WeatherDto {

  @IsInt()
  id: number;

  @IsInt()
  city: CityDto;

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
