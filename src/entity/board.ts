// import { v4 } from 'uuid';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import BoardColumn from './board-column';

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('json')
  columns!: BoardColumn[];

  // constructor({ id = v4(), title = 'Board', columns = [] } = {}) {
  //   this.id = id;
  //   this.title = title;
  //   this.columns = columns;
  // }
}

export default Board;
