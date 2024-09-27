import express, { Application } from 'express';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';

const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/protected', protectedRoutes);

export default app;
