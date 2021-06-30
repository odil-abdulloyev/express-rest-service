import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('columns')
class BoardColumn extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  // constructor({ id = v4(), title = 'Column', order = 0 } = {}) {
  //   this.id = id;
  //   this.title = title;
  //   this.order = order;
  // }
}

export default BoardColumn;