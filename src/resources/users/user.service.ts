import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = async () => usersRepo.getAll();

const create = async (user: User) => usersRepo.create(user);

const getById = async (id: string) => usersRepo.getById(id);

const update = async (newUser: User) => usersRepo.update(newUser);

const remove = async (id: string) => usersRepo.remove(id);

export { getAll, create, getById, update, remove };
