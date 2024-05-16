import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cities } from './cities.entity';
import { Weather } from './weather.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cities, Weather])],
  exports: [TypeOrmModule]
})
export class EntitiesModule {}
