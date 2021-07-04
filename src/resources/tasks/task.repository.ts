import Task from '../../entity/task';
import ITask from '../../types/itask';

const getAll = async (boardId: string): Promise<Task[]> => Task.find({boardId});

const create = async ({title, order, description, userId, boardId, columnId}: ITask): Promise<Task> => {
  const task = new Task();
  task.title = title;
  task.order = order;
  task.description = description;
  task.userId = userId;
  task.boardId = boardId;
  task.columnId = columnId;
  await task.save();
  return task;
};

const getById = async (id: string): Promise<Task | undefined> => Task.findOne(id);

const update = async (newTask: ITask): Promise<boolean> => !!await Task.update(newTask.id, newTask);

const remove = async (id: string): Promise<boolean> => !!await Task.delete(id);

export {
  getAll,
  create,
  getById,
  update,
  remove
};
