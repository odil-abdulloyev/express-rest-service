const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const addUser = async (user) => usersRepo.addUser(user);

const getById = async (id) => usersRepo.getById(id);

const update = async (newUser) => usersRepo.update(newUser);

const deleteUser = async (id) => usersRepo.deleteUser(id);

module.exports = { getAll, addUser, getById, update, deleteUser };
