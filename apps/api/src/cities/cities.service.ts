import { Injectable } from '@nestjs/common';
// import { User } from '../User/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cities } from '../entities/cities.entity';
import { CityDto } from './cities.dto';
import {  WeatherDto } from './weather.dto';
import { Weather } from '../entities/weather.entity';

@Injectable()
export class CitiesService {
  constructor( @InjectRepository(Cities)
               private cities: Repository<Cities>,@InjectRepository(Weather)
  private weather: Repository<Weather>) {
  }
  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }
  async getCities(): Promise<CityDto[]> {
    return await this.cities.find();
  }

  async getTodaysWeatherInMetric(cityId: number): Promise<WeatherDto> {
    return await this.weather.findOne({
      where: { city: { id: cityId } },
    });
  }

  async getTodaysWeatherImperial(cityId: number): Promise<WeatherDto> {
    return this.convertMetricToImperial(await this.weather.findOne({
      where: { city: { id: cityId } },
    }));
  }

  private convertMetricToImperial(weather: WeatherDto): WeatherDto {
    return {
      ...weather,
      temperature: (weather.temperature * 9) / 5 + 32,
      pressure: weather.pressure * 0.02953,
      wind: weather.wind * 0.621371
    }
  }
}
