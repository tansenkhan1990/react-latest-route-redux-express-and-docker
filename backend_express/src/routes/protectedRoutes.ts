import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { getDashboard } from '../controllers/protectedController';

const router = express.Router();

router.get('/dashboard', authenticateJWT, getDashboard);

export default router;
