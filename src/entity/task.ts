// import { v4 } from 'uuid';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @Column()
  userId!: string | null;

  @Column()
  boardId!: string;

  @Column()
  columnId!: string;

  // constructor({
  //               id = v4(),
  //               title = 'Task',
  //               order = 0,
  //               description = 'Task description',
  //               userId = '',
  //               boardId = '',
  //               columnId = ''
  //             } = {}) {
  //   this.id = id;
  //   this.title = title;
  //   this.order = order;
  //   this.description = description;
  //   this.userId = userId;
  //   this.boardId = boardId;
  //   this.columnId = columnId;
  // }
}

export default Task;
