import { Test } from '@nestjs/testing';

import { CitiesService } from './cities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cities } from '../entities/cities.entity';
import { Weather } from '../entities/weather.entity';
import { WeatherDto } from './weather.dto';
const mockCityRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
};



describe('CitiesService', () => {
  let service: CitiesService;
  const findWeatherMock = jest.fn()

  beforeAll(async () => {
    const mockWeatherRepository = {
      find: jest.fn(),
      findOne: findWeatherMock,
      save: jest.fn(),
    };
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Cities),
          useValue: mockCityRepository,
        },
        {
          provide: getRepositoryToken(Weather),
          useValue: mockWeatherRepository,
        },
        CitiesService],
    }).compile();

    service = app.get<CitiesService>(CitiesService);
    findWeatherMock.mockReturnValue({
      "id": 1,
      "day": "2024-05-16T00:00:00Z",
      "temperature": 22.5, // degrees Celsius
      "pressure": 1013, // hPa (hectopascals)
      "humidity": 60, // percentage
      "wind": 5.5 // meters per second
    })
  });

  describe('getTodaysWeatherInMetric', () => {
    it('should get todays weather', async () => {
      const res = await service.getTodaysWeatherImperial(1);
      expect(findWeatherMock).toHaveBeenCalledWith({
        where: { city: { id: 1 } },
      });
      expect(res).toEqual({
        "id": 1,
        "day": "2024-05-16T00:00:00Z",
        "temperature": 72.5, // degrees Fahrenheit
        "pressure": 29.91, // inHg (inches of mercury)
        "humidity": 60, // percentage
        "wind": 12.3 // miles per hour
      });
    });
  });
});
