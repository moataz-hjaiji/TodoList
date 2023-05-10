import express from 'express';
import taskRouter from './task/tasks';
import userRouter from './user/user';
import { login, signup } from './../../Controller/auth';
import { verifyToken } from './../../Middleware/Auth';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);

router.use('/tasks', verifyToken, taskRouter);
router.use('/users', userRouter);

export default router;
