import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  login!: string;

  @Column({ nullable: true })
  password!: string;

  static toResponse(user: User): { id: string, name: string, login: string } {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
