const connection = require('./connection');

const getAllModel = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products;
};

module.exports = {
  getAllModel,
};
