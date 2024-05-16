import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT || ''),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      autoLoadEntities: true, // To discover
      synchronize: true, //Todo: not for prod
    }),
    EntitiesModule
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class AppModule {}
