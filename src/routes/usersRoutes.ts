import { Router } from 'express';
import usersController from '../controllers/usersController';
import checkUserBody from '../middlewares/usersMiddlewares';

const routes = Router();

routes.post('/', checkUserBody, usersController.createUserController);

export default routes;