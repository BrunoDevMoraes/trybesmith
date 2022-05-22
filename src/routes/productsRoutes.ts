import { Router } from 'express';
import productsController from '../controllers/productsController';

const routes = Router();

routes.get('/', productsController.getAllController);

routes.post('/', productsController.createProductController);

export default routes;