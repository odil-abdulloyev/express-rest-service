import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('boards/:boardId/tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Post()
  async create(
    @Body() createTaskDto: CreateTaskDto,
    @Param('boardId') boardId: string
  ): Promise<Task> {
    try {
      return await this.tasksService.create({ ...createTaskDto, boardId });
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    const task = await this.tasksService.findOne(id);
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto
  ): Promise<UpdateResult> {
    const task = await this.tasksService.findOne(id);
    if (!task) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const task = await this.tasksService.findOne(id);
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return this.tasksService.remove(id);
  }
}
