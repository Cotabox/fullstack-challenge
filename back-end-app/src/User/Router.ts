import express from 'express';
import { UserController } from './Controller';


const userRouter = express.Router();

userRouter.post('/get-token', UserController.generateToken);
userRouter.post('/', UserController.save);

export { userRouter }