import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION } from '../config/config';

interface UserPayload {
  username: string;
}

export const generateToken = (user: UserPayload): string => {
  return jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};
