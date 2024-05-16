import { Controller, Get, Param } from '@nestjs/common';

import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities() {
    return this.citiesService.getCities();
  }

  @Get(':id/daily-weather/metric')
  getWeatherMetric(@Param('id') id: number){
    return this.citiesService.getTodaysWeatherInMetric(id);
  }

  @Get(':id/daily-weather/imperial')
  getWeatherImperial(@Param('id') id: number){
    return this.citiesService.getTodaysWeatherImperial(id);
  }

}
