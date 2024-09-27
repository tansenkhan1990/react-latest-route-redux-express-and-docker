import { Request, Response } from 'express';

// GET /dashboard
export const getDashboard = (req: Request, res: Response): void => {
  res.status(200).json({ message: `Welcome ${req.user?.username}, this is your dashboard!` });
};
