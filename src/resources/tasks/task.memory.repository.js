const tasks = [];

/**
 * Get all tasks
 * @param {string} boardId board id
 * @returns {Promise<Array<Task>>} all tasks
 */
const getAll = async (boardId) =>
  tasks.filter((task) => task.boardId === boardId);

/**
 * Create new task
 * @param {Task} task Task instance
 * @returns {Promise<void>} void
 */
const create = async (task) => {
  tasks.push(task);
};

/**
 * Get task by id
 * @param {string} id task id
 * @returns {Promise<Task|undefined>} task by id
 */
const getById = async (id) => tasks.find((task) => task.id === id);

/**
 * Update task
 * @param {Task} newTask new task
 * @returns {Promise<boolean>} true if updated, otherwise - false
 */
const update = async (newTask) => {
  const idx = tasks.findIndex((task) => task.id === newTask.id);
  if (idx >= 0) {
    tasks.splice(idx, 1, newTask);
    return true;
  }
  return false;
};

/**
 * Remove task by id
 * @param {string} id task id
 * @returns {Promise<boolean>} true if removed, otherwise - false
 */
const remove = async (id) => {
  const idx = tasks.findIndex((user) => user.id === id);
  if (idx >= 0) {
    tasks.splice(idx, 1);
    return true;
  }
  return false;
};

/**
 * Remove all tasks of board
 * @param {string} boardId board id
 */
const removeBoardTasks = async (boardId) => {
  if (tasks.length > 0) {
    let i = tasks.length - 1;
    while (i >= 0) {
      if (tasks[i].boardId === boardId) {
        tasks.splice(i, 1);
      }
      i -= 1;
    }
  }
};

/**
 * Unassign user
 * @param {string} userId user id
 */
const unassignUser = async (userId) => {
  tasks.forEach((task) => {
    const currentTask = task;
    if (task.userId === userId) {
      currentTask.userId = null;
    }
  });
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
  removeBoardTasks,
  unassignUser,
};
