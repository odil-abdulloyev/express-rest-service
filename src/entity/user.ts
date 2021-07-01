import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IUser from '../types/iuser';

@Entity('users')
class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({nullable: true})
  login!: string;

  @Column({nullable: true})
  password!: string;

  static toResponse(user: User): { id: string, name: string, login: string } {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
