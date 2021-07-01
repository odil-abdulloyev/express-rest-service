import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import BoardColumn from './board-column';
import IBoard from '../types/iboard';

@Entity('boards')
class Board extends BaseEntity implements IBoard {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('json')
  columns!: BoardColumn[];
}

export default Board;
