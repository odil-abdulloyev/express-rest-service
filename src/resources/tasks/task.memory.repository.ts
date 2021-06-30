import Task from './task.model';
import TaskEntity from '../../entity/task';
import ITask from '../../types/itask';

const tasks: Task[] = [];

const getAll = async (boardId: string): Promise<TaskEntity[]> => TaskEntity.find({boardId});

const create = async ({title, order, description, userId, boardId, columnId}: ITask): Promise<TaskEntity> => {
  const task = new TaskEntity();
  task.title = title;
  task.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  await task.save();
  return task;
};

const getById = async (id: string): Promise<TaskEntity | undefined> => TaskEntity.findOne(id);

const update = async (newTask: ITask): Promise<boolean> => {
  const task = await TaskEntity.findOne(newTask.id);
  if (task) {
    task.title = newTask.title;
    task.order = newTask.order;
    task.description = newTask.description;
    task.boardId = newTask.boardId;
    task.userId = newTask.userId;
    task.columnId = newTask.columnId;
    await task.save();
    return true;
  }
  return false;
};

const remove = async (id: string): Promise<boolean> => {
  const task = await TaskEntity.findOne(id);
  if (task) {
    await task.remove();
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
