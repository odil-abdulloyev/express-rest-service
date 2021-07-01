import * as tasksRepo from './task.memory.repository';
import Task from '../../entity/task';
import ITask from '../../types/itask';

const getAll = async (boardId: string): Promise<Task[]> => tasksRepo.getAll(boardId);

const create = async (task: ITask): Promise<Task> => tasksRepo.create(task);

const getById = async (id: string): Promise<Task | undefined> => tasksRepo.getById(id);

const update = async (newTask: ITask): Promise<boolean> => tasksRepo.update(newTask);

const remove = async (id: string): Promise<boolean> => tasksRepo.remove(id);

// const removeBoardTasks = async (boardId: string): Promise<void> => tasksRepo.removeBoardTasks(boardId);
//
// const unassignUser = async (userId: string): Promise<void> => tasksRepo.unassignUser(userId);

export {
  getAll,
  create,
  getById,
  update,
  remove
};
