// import { v4 } from 'uuid';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  login!: string;

  @Column()
  password!: string;

  // constructor({
  //               id = v4(),
  //               name = 'USER',
  //               login = 'user',
  //               password = 'P@55w0rd'
  //             } = {}) {
  //   this.id = id;
  //   this.name = name;
  //   this.login = login;
  //   this.password = password;
  // }

  static toResponse(user: User): { id: string, name: string, login: string } {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
