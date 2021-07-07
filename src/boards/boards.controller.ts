import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.create(createBoardDto);
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Board> {
    const board = await this.boardsService.findOne(id);
    if (!board) {
      throw new HttpException('Board not found', HttpStatus.NOT_FOUND);
    }
    return board;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto): Promise<UpdateResult> {
    const board = await this.boardsService.findOne(id);
    if (!board) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    return this.boardsService.update(id, updateBoardDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const board = await this.boardsService.findOne(id);
    if (!board) {
      throw new HttpException('Board not found', HttpStatus.NOT_FOUND);
    }
    return this.boardsService.remove(id);
  }
}
