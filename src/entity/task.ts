import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import ITask from '../types/itask';
import User from './user';
import Board from './board';

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

  @Column({nullable: true})
  userId!: string | null;

  @Column({nullable: true})
  boardId!: string;

  @Column({nullable: true})
  columnId!: string;

  @ManyToOne(() => User, {onDelete: 'SET NULL'})
  user!: User

  @ManyToOne(() => Board, {onDelete: 'CASCADE'})
  board!: Board
}

export default Task;
