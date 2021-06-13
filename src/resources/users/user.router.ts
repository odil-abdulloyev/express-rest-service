import { Router, Request, Response, NextFunction } from 'express';
import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  try {
    await usersService.create(user);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await usersService.getById(String(id));
    if (user) {
      res.status(200).json(User.toResponse(user));
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const newUser = new User({ id, name, login, password });
  try {
    const updated = await usersService.update(newUser);
    if (updated) {
      res.status(200).json(User.toResponse(newUser));
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const deleted = await usersService.remove(String(id));
  try {
    await tasksService.unassignUser(String(id));
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
