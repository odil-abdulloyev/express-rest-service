const tasksRepo = require('./task.memory.repository');

const getAll = async (boardId) => tasksRepo.getAll(boardId);

const addTask = async (task) => tasksRepo.addTask(task);

const getById = async (id) => tasksRepo.getById(id);

const update = async (newTask) => tasksRepo.update(newTask);

const deleteTask = async (id) => tasksRepo.deleteTask(id);

const deleteFromBoard = async (boardId) => tasksRepo.deleteFromBoard(boardId);

const unassignUser = async (userId) => tasksRepo.unassignUser(userId);

module.exports = {
  getAll,
  addTask,
  getById,
  update,
  deleteTask,
  deleteFromBoard,
  unassignUser,
};
