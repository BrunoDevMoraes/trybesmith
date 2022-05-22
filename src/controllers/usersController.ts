import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUserController = (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const userToken = usersService.createUserService(payload);
    return res.status(201).json(userToken);
  } catch (err) {
    return res.status(500).send({ message: (err as Error).message });
  }
};

export default {
  createUserController,
};
