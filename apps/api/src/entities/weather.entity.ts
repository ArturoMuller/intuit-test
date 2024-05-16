import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cities } from './cities.entity';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cities, (city) => city.weather)
  city: Cities;

  @Column({ type: 'date'})
  day: Date;

  @Column( {type: 'decimal'})
  temperature: number;

  @Column({type: 'decimal' })
  pressure: number;

  @Column({type: 'decimal'})
  humidity: number;

  @Column({type: 'decimal'})
  wind: number;

}
