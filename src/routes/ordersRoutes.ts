import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const routes = Router();

routes.get('/', ordersController.getAllController);

export default routes;