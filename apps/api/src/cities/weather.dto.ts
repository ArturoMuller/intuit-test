import { IsDate, IsInt, IsNumber } from 'class-validator';
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

