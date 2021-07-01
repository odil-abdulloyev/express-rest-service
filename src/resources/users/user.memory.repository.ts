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

const update = async (newUser: IUser): Promise<boolean> => {
  const user = await User.findOne(newUser.id);
  if (user) {
    user.name = newUser.name;
    user.login = newUser.login;
    user.password = newUser.password;
    await user.save();
    return true;
  }
  return false;
};

const remove = async (id: string): Promise<boolean> => {
  const user = await User.findOne(id);
  if (user) {
    await user.remove();
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
