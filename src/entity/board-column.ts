import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IColumn from '../types/icolumn';

@Entity('columns')
class BoardColumn extends BaseEntity implements IColumn {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;
}

export default BoardColumn;