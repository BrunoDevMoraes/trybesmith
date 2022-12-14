import { Request, Response, NextFunction } from 'express';
import { nameVerification, amountVerification } from '../helpers/productsHelpers';

const checkProductBody = (req: Request, res: Response, next: NextFunction) => {
  const nameStatus = nameVerification(req.body.name);
  const amountStatus = amountVerification(req.body.amount);
  if (nameStatus !== true) {
    return res.status(nameStatus.status).json({ message: nameStatus.message });
  }
  if (amountStatus !== true) {
    return res.status(amountStatus.status).json({ message: amountStatus.message });
  }
  next();
};

export default checkProductBody;
