import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
    try {
      return await this.usersService.create(createUserDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<Partial<User>[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Partial<User>> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.usersService.remove(id);
  }
}
