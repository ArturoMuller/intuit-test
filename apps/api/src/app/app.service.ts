import { Injectable } from '@nestjs/common';
import { User } from '../User/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor( @InjectRepository(User)
               private usersRepository: Repository<User>,) {
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
