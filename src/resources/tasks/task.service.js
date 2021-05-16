const tasksRepo = require('./task.memory.repository');

const getAll = async (boardId) => tasksRepo.getAll(boardId);

const create = async (task) => tasksRepo.create(task);

const getById = async (id) => tasksRepo.getById(id);

const update = async (newTask) => tasksRepo.update(newTask);

const remove = async (id) => tasksRepo.remove(id);

const removeBoardTasks = async (boardId) => tasksRepo.removeBoardTasks(boardId);

const unassignUser = async (userId) => tasksRepo.unassignUser(userId);

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
  removeBoardTasks,
  unassignUser,
};
