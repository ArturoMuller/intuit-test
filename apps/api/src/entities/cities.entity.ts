import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Weather } from './weather.entity';

@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Weather, (weather) => weather.city)
  weather: Weather[];
}

