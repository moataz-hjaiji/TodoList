import express from 'express';
import { createUser, getMe } from './../../../Controller/userController';

const router = express.Router();

router.post('/', createUser);


export default router;
