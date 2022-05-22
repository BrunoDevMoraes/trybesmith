import usersModel from '../models/usersModel';
import { createToken } from '../jwt';

const createUserService = (payload: {
  username: string,
  classe: string,
  level: number,
  password: string,
}) => {
  const { username, classe, level, password } = payload;
  const userId = usersModel.createUserModel(username, classe, level, password);
  const token = createToken({ userId });
  return { token };
};

export default {
  createUserService,
};