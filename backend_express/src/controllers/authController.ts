import { Request, Response } from 'express';
import { generateToken } from '../utils/tokenUtils';

const validUsername = 'tansen';
const validPassword = 'tansen';

// POST /login
export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    const token = generateToken({ username });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
};

// POST /logout
export const logout = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Logged out successfully' });
};
