import { IsNotEmpty, IsInt } from 'class-validator';
export class CityDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
  name: string;
}
