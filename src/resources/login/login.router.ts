import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as loginService from './login.service';

const router = Router();

router.route('/').post(async (req: Request, res: Response) => {
  const {login, password} = req.body;
  const user = await loginService.getUser(login);
  if (user) {
    if (!await bcrypt.compare(password, user.password)) {
      res.status(403).json({message: 'Invalid password'});
    } else {
      const token = jwt.sign({login, userId: user.id}, process.env['JWT_SECRET_KEY'] as string, {expiresIn: '24h'});
      res.json({token});
    }
  } else {
    res.status(403).json({message: 'forbidden'});
  }
});

export default router;
