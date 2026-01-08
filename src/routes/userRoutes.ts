import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export function setUserRoutes(app) {
    app.post('/api/users/register', userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
    app.get('/api/users/profile', userController.getUserProfile);
    app.put('/api/users/profile', userController.updateUser);
}