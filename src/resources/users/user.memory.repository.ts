import User from './user.model';

const users: User[] = [];

const getAll = async () => users;

const create = async (user: User) => {
  users.push(user);
};

const getById = async (id: string) => users.find((user) => user.id === id);

const update = async (newUser: User) => {
  const idx = users.findIndex((user) => user.id === newUser.id);
  if (idx >= 0) {
    users.splice(idx, 1, newUser);
    return true;
  }
  return false;
};

const remove = async (id: string) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx >= 0) {
    users.splice(idx, 1);
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
