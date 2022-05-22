import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllController = async (_req: Request, res: Response) => {
  try {
    const allProducts = await productsService.getAllService();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).send({ message: (err as Error).message }); // https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript
  }
};

const createProductController = async (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const product = await productsService.createProductService(payload);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).send({ message: (err as Error).message });
  }
};

export default {
  getAllController,
  createProductController,
};
