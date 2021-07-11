import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('columns')
export class BoardColumn {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;
}
