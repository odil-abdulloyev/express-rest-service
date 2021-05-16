const users = [];

const getAll = async () => users;

const create = async (user) => {
  users.push(user);
};

const getById = async (id) => users.find((user) => user.id === id);

const update = async (newUser) => {
  const idx = users.findIndex((user) => user.id === newUser.id);
  if (idx >= 0) {
    users.splice(idx, 1, newUser);
    return true;
  }
  return false;
};

const remove = async (id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx >= 0) {
    users.splice(idx, 1);
    return true;
  }
  return false;
};

module.exports = { getAll, create, getById, update, remove };
