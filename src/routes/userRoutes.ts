import { Router } from 'express';
<<<<<<< HEAD
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
=======
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export function setUserRoutes(app) {
    app.post('/api/users/register', userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
    app.get('/api/users/profile', userController.getUserProfile);
    app.put('/api/users/profile', userController.updateUser);
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b
