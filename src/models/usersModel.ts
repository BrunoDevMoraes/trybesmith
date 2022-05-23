import { OkPacket } from 'mysql2';
import connection from './connection';

const createUserModel = async (
  username:string,
  classe: string,
  level: number,
  password: string,
) => {
  const string1 = 'INSERT INTO Trybesmith.Users ';
  const string2 = '(username, classe, level, password) VALUES (?, ?, ?, ?)';
  const query = string1 + string2;
  const [result] = await connection.execute<OkPacket>(query, [username, classe, level, password]);
  return result.insertId;
};

export default {
  createUserModel,
};
