// First commit
import express from 'express';
import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/orders', ordersRoutes);

export default app;
