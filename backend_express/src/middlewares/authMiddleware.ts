import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

interface JwtPayload {
  username: string;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    res.status(401).json({ message: 'Access Denied. No token provided.' });
    return;
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = verified; // Attach user data to the request object
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};
