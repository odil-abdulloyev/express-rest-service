import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}
  
  async create(createUserDto: CreateUserDto): Promise<Partial<User>> {
    return User.toResponse(await this.usersRepository.save(createUserDto));
  }

  async findAll(): Promise<Partial<User>[]> {
    return (await this.usersRepository.find()).map(User.toResponse);
  }

  async findOne(id: string): Promise<Partial<User> | undefined> {
    return User.toResponse(await this.usersRepository.findOne(id) as User);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
