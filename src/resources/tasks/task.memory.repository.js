const tasks = [];

const getAll = async (boardId) =>
  tasks.filter((task) => task.boardId === boardId);

const create = async (task) => {
  tasks.push(task);
};

const getById = async (id) => tasks.find((task) => task.id === id);

const update = async (newTask) => {
  const idx = tasks.findIndex((task) => task.id === newTask.id);
  if (idx >= 0) {
    tasks.splice(idx, 1, newTask);
    return true;
  }
  return false;
};

const remove = async (id) => {
  const idx = tasks.findIndex((user) => user.id === id);
  if (idx >= 0) {
    tasks.splice(idx, 1);
    return true;
  }
  return false;
};

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
