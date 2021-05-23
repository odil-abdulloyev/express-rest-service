const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const create = async (user) => usersRepo.create(user);

const getById = async (id) => usersRepo.getById(id);

const update = async (newUser) => usersRepo.update(newUser);

const remove = async (id) => usersRepo.remove(id);

module.exports = { getAll, create, getById, update, remove };
