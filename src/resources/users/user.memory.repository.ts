import User from '../../entity/user';
import IUser from '../../types/iuser';

const getAll = async (): Promise<User[]> => User.find();

const create = async ({name, login, password}: IUser): Promise<User> => {
  const user = new User();
  user.name = name;
  user.login = login;
  user.password = password;
  await user.save();
  return user;
};

const getById = async (id: string): Promise<User | undefined> => User.findOne(id);

const update = async (newUser: IUser): Promise<boolean> => !!await User.update(newUser.id, newUser);

const remove = async (id: string): Promise<boolean> => !!await User.delete(id);

export { getAll, create, getById, update, remove };
