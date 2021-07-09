import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Board } from '../boards/board.entity';

@Entity('tasks')
export class Task {
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
