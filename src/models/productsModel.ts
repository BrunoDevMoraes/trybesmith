import { OkPacket } from 'mysql2';
import connection from './connection';

const getAllModel = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products;
};

const createProductModel = async (name: string, amount: string) => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<OkPacket>(query, [name, amount]);
  return { id: result.insertId, name, amount };
};

export default {
  getAllModel,
  createProductModel,
};
