import { Router, Request, Response, NextFunction } from 'express';
import * as boardsService from './board.service';
import * as tasksService from '../tasks/task.service';
import IBoard from '../../types/iboard';

const router = Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const boards = await boardsService.getAll();
    res.status(200).json(boards);
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const { title, columns } = req.body;
  try {
    const board = await boardsService.create({ title, columns } as IBoard);
    res.status(201).json(board);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    try {
      const board = await boardsService.getById(id);
      if (board) {
        res.status(200).json(board);
      } else {
        res.status(404).json({message: 'Board not found'});
      }
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  if (id) {
    try {
      const updated = await boardsService.update({ id, title, columns });
      res.status(200).json({message: `Updated: ${updated}`});
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    const deleted = await boardsService.remove(id);
    try {
      await tasksService.removeBoardTasks(id);
      res.status(204).json({message: `Deleted: ${deleted}`});
    } catch (error) {
      next(error);
    }
  }
});

export default router;
