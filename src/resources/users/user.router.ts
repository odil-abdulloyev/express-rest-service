import { Router, Request, Response } from 'express';
import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  try {
    await usersService.create(user);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await usersService.getById(String(id));
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const newUser = new User({ id, name, login, password });
  const updated = await usersService.update(newUser);
  if (updated) {
    res.status(200).json(User.toResponse(newUser));
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await usersService.remove(String(id));
  await tasksService.unassignUser(String(id));
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

export default router;
