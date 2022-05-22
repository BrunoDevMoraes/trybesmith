import { Request, Response, NextFunction } from 'express';
import {
  usernameVerification,
  classVerification,
  levelVerification,
  passwordVerification } from '../helpers/usersHelpers';

const checkUserBody = (req: Request, res: Response, next: NextFunction) => {
  const usernameStatus = usernameVerification(req.body.username);
  const classStatus = classVerification(req.body.classe);
  const levelStatus = levelVerification(req.body.level);
  const passwordStatus = passwordVerification(req.body.password);
  if (usernameStatus !== true) {
    return res.status(usernameStatus.status).json({ message: usernameStatus.message });
  }
  if (classStatus !== true) {
    return res.status(classStatus.status).json({ message: classStatus.message });
  }
  if (levelStatus !== true) {
    return res.status(levelStatus.status).json({ message: levelStatus.message });
  }
  if (passwordStatus !== true) {
    return res.status(passwordStatus.status).json({ message: passwordStatus.message });
  }
  next();
};

export default checkUserBody;