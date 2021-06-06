import Task from './task.model';

const tasks: Task[] = [];

const getAll = async (boardId: string): Promise<Task[]> =>
  tasks.filter((task) => task.boardId === boardId);

const create = async (task: Task): Promise<void> => {
  tasks.push(task);
};

const getById = async (id: string): Promise<Task | undefined> => tasks.find((task) => task.id === id);

const update = async (newTask: Task): Promise<boolean> => {
  const idx = tasks.findIndex((task) => task.id === newTask.id);
  if (idx >= 0) {
    tasks.splice(idx, 1, newTask);
    return true;
  }
  return false;
};

const remove = async (id: string): Promise<boolean> => {
  const idx = tasks.findIndex((user) => user.id === id);
  if (idx >= 0) {
    tasks.splice(idx, 1);
    return true;
  }
  return false;
};

const removeBoardTasks = async (boardId: string): Promise<void> => {
  if (tasks.length > 0) {
    let i = tasks.length - 1;
    while (i >= 0) {
      if (tasks[i]?.boardId === boardId) {
        tasks.splice(i, 1);
      }
      i -= 1;
    }
  }
};

const unassignUser = async (userId: string): Promise<void> => {
  tasks.forEach((task) => {
    const currentTask = task;
    if (task.userId === userId) {
      currentTask.userId = null;
    }
  });
};

export {
  getAll,
  create,
  getById,
  update,
  remove,
  removeBoardTasks,
  unassignUser
};
