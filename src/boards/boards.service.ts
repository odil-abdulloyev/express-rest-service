import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(@InjectRepository(Board) private boardsRepository: Repository<Board>) {}

 async create(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsRepository.save(createBoardDto);
  }

  async findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  async findOne(id: string): Promise<Board | undefined> {
    return this.boardsRepository.findOne(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto): Promise<UpdateResult> {
    return this.boardsRepository.update(id, updateBoardDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.boardsRepository.delete(id);
  }
}
