import * as usersRepo from './user.memory.repository';
import User from '../../entity/user';
import IUser from '../../types/iuser';

const getAll = async (): Promise<User[]> => usersRepo.getAll();

const create = async (user: IUser): Promise<User> => usersRepo.create(user);

const getById = async (id: string): Promise<User | undefined> => usersRepo.getById(id);

const update = async (newUser: IUser): Promise<boolean> => usersRepo.update(newUser);

const remove = async (id: string): Promise<boolean> => usersRepo.remove(id);

export { getAll, create, getById, update, remove };
