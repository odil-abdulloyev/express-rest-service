import { Router, Request, Response, NextFunction } from 'express';
// import Task from './task.model';
import * as tasksService from './task.service';
import ITask from '../../types/itask';

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
  if (boardId) {
    try {
      const task = await tasksService.create({
        title,
        order,
        description,
        userId,
        columnId,
        boardId
      } as ITask);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    try {
      const task = await tasksService.getById(id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({message: 'Task not found'});
      }
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  if (id) {
    try {
      const updated = await tasksService.update({
        id,
        title,
        order,
        description,
        userId,
        boardId,
        columnId
      });
      res.status(200).json({updated});
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    try {
      const deleted = await tasksService.remove(id);
      res.status(204).json({deleted});
    } catch (error) {
      next(error);
    }
  }
});

export default router;
