import { Router } from 'express';
import productsController from '../controllers/productsController';
import checkProductBody from '../middlewares/productsMiddleware';

const routes = Router();

routes.get('/', productsController.getAllController);

routes.post('/', checkProductBody, productsController.createProductController);

export default routes;