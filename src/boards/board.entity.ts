import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardColumn } from './board-column.entity';

@Entity('boards')
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('json', {nullable: true})
  columns!: BoardColumn[];
}
