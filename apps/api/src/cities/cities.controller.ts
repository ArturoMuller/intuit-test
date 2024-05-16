import { Controller, Get, Param } from '@nestjs/common';

import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities() {
    return this.citiesService.getCities();
  }

  @Get(':id')
  getWeather(@Param('id') id: string){
    return this.citiesService.getCityWeatherByCityId(id);
  }

}
