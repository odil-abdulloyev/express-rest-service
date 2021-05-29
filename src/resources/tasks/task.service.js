const tasksRepo = require('./task.memory.repository');

/**
 * Get all tasks
 * @param {string} boardId board id
 * @returns {Promise<Array<Task>>} all tasks
 */
const getAll = async (boardId) => tasksRepo.getAll(boardId);

/**
 * Create new task
 * @param {Task} task Task instance
 * @returns {Promise<void>} void
 */
const create = async (task) => tasksRepo.create(task);

/**
 * Get task by id
 * @param {string} id task id
 * @returns {Promise<Task|undefined>} task by id
 */
const getById = async (id) => tasksRepo.getById(id);

/**
 * Update task
 * @param {Task} newTask new task
 * @returns {Promise<boolean>} true if updated, otherwise - false
 */
const update = async (newTask) => tasksRepo.update(newTask);

/**
 * Remove task by id
 * @param {string} id task id
 * @returns {Promise<boolean>} true if removed, otherwise - false
 */
const remove = async (id) => tasksRepo.remove(id);

/**
 * Remove all tasks of board
 * @param {string} boardId board id
 */
const removeBoardTasks = async (boardId) => tasksRepo.removeBoardTasks(boardId);

/**
 * Unassign user
 * @param {string} userId user id
 */
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
