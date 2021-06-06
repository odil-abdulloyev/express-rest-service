import { Router, Request, Response, NextFunction } from 'express';
import Board from './board.model';
import * as boardsService from './board.service';
import * as tasksService from '../tasks/task.service';

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
  const board = new Board({ title, columns });
  try {
    await boardsService.create(board);
    res.status(201).json(board);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const board = await boardsService.getById(String(id));
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const newBoard = new Board({ id, title, columns });
  try {
    const updated = await boardsService.update(newBoard);
    if (updated) {
      res.status(200).json(newBoard);
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const deleted = await boardsService.remove(String(id));
  try {
    await tasksService.removeBoardTasks(String(id));
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
