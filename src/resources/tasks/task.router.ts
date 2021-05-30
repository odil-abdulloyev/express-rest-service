import { Router, Request, Response } from 'express';
import Task from './task.model';
import * as tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  if (boardId) {
    const tasks = await tasksService.getAll(boardId);
    res.status(200).json(tasks);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    columnId,
    boardId,
  });
  try {
    await tasksService.create(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await tasksService.getById(String(id));
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const newTask = new Task({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  const updated = await tasksService.update(newTask);
  if (updated) {
    res.status(200).json(newTask);
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await tasksService.remove(String(id));
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

export default router;
