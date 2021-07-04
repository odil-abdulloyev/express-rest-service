import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../entity/user';

const validateAuth = (req: Request, res: Response, next: NextFunction): void => {
  const scheme = req.headers.authorization?.split(' ')[0];
  const sessionToken = req.headers.authorization?.split(' ')[1];
  if (scheme !== 'Bearer' || !sessionToken) {
    res.status(401).json({ message: 'No token provided' });
  } else {
    jwt.verify(sessionToken, process.env['JWT_SECRET_KEY'] as string, async (_err, decoded) => {
      if (decoded) {
        const { userId } = decoded;
        const user = await User.findOne({ id: userId });
        if (!user) {
          res.status(401).json({ message: 'User not found' });
        } else {
          next();
        }
      } else {
        res.status(401).json({ message: 'Not authorized' });
      }
    });
  }
};

export default validateAuth;
