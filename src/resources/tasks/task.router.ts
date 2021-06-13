import { Router, Request, Response, NextFunction } from 'express';
import Task from './task.model';
import * as tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response, next: NextFunction) => {
  const { boardId } = req.params;
  if (boardId) {
    try {
      const tasks = await tasksService.getAll(boardId);
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    columnId,
    boardId
  });
  try {
    await tasksService.create(task);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const task = await tasksService.getById(String(id));
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const newTask = new Task({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  try {
    const updated = await tasksService.update(newTask);
    if (updated) {
      res.status(200).json(newTask);
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const deleted = await tasksService.remove(String(id));
    if (deleted) {
      res.status(204).json(true);
    } else {
      res.status(404).json(false);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
