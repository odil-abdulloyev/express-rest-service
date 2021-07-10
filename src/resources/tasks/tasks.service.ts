import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) {
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.save(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: string): Promise<Task | undefined> {
    return this.tasksRepository.findOne(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    return this.tasksRepository.update(id, updateTaskDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.tasksRepository.delete(id);
  }
}
