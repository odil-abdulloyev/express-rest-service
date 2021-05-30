import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = async (boardId: string) => tasksRepo.getAll(boardId);

const create = async (task: Task) => tasksRepo.create(task);

const getById = async (id: string) => tasksRepo.getById(id);

const update = async (newTask: Task) => tasksRepo.update(newTask);

const remove = async (id: string) => tasksRepo.remove(id);

const removeBoardTasks = async (boardId: string) => tasksRepo.removeBoardTasks(boardId);

const unassignUser = async (userId: string) => tasksRepo.unassignUser(userId);

export {
  getAll,
  create,
  getById,
  update,
  remove,
  removeBoardTasks,
  unassignUser,
};
