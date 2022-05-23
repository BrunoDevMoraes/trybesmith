import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllController = async (_req: Request, res: Response) => {
  try {
    const allOrders = await ordersService.getAllService();
    return res.status(200).json(allOrders);
  } catch (err) {
    return res.status(500).send({ message: (err as Error).message });
  }
};

export default {
  getAllController,
};
