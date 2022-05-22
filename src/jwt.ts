import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

// const { JWT_SECRET } = process.env;

// const jwtOptions = { algorithm: 'HS256' };

const createToken = (payload: Record<string, unknown>) => jwt
  .sign(payload, 'batata', { algorithm: 'HS256' });

const checkToken = (token: string) => {
  try {
    return jwt.verify(token, 'batata', { algorithms: ['HS256'] });
  } catch (err) {
    return false;
  }
};

export {
  createToken,
  checkToken,
};
