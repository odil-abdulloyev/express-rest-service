import { Router, Request, Response, NextFunction } from 'express';
import * as usersService from './user.service';
import User from '../../entity/user';

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
  try {
    const user = await usersService.create({ name, login, password } as User);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    try {
      const user = await usersService.getById(id);
      if (user) {
        res.status(200).json(User.toResponse(user));
      } else {
        res.status(404).json({message: 'User not found'});
      }
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  if (id) {
    try {
      const updated = await usersService.update({ id, name, login, password });
      res.status(updated ? 200 : 404).json({updated});
    } catch (error) {
      next(error);
    }
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id) {
    const deleted = await usersService.remove(id);
    try {
      res.status(deleted ? 204 : 404).json({deleted});
    } catch (error) {
      next(error);
    }
  }
});

export default router;
