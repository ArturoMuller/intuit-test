import { Test, TestingModule } from '@nestjs/testing';

import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    }).compile();
  });

  describe('getData', () => {
    // it('should return "Hello API"', () => {
    //   const appController = app.get<CitiesController>(CitiesController);
    //   expect(appController.getData()).toEqual({ message: 'Hello API' });
    // });
  });
});
