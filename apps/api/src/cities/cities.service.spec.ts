import { Test } from '@nestjs/testing';

import { CitiesService } from './cities.service';

describe('AppService', () => {
  let service: CitiesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = app.get<CitiesService>(CitiesService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
