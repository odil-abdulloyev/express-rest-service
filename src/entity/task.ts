import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import ITask from '../types/itask';

@Entity('tasks')
class Task extends BaseEntity implements ITask {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @Column('varchar',{nullable: true})
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
