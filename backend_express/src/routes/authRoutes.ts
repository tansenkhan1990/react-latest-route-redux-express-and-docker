import express from 'express';
import { login, logout } from '../controllers/authController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.get('/logout',authenticateJWT, logout);

export default router;
