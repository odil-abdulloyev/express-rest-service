import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as loginService from './login.service';
import IUser from '../../types/iuser';

const router = Router();

router.route('/').post(async (req: Request, res: Response) => {
  const {login, password} = req.body;
  // console.log(password);
  const user = await loginService.getUser({login, password} as IUser);
  if (user) {
    const token = jwt.sign({login, userId: user.id}, process.env['JWT_SECRET_KEY'] as string, {expiresIn: '24h'});
    res.json({token});
  } else {
    res.status(403).json({message: 'forbidden'});
  }
});

export default router;
