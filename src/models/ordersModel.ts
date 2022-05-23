import connection from './connection';

const findRightProducts = (products: {
  id: number,
  name: string,
  amount: string,
  orderId: number | null,
}[], orderId: number) => {
  const rightProducts = products.filter((product) => product.orderId === orderId);
  return rightProducts.map((product) => product.id);
};

const getAllModel = async () => {
  const [orders] = await connection.execute<any>('SELECT * FROM Trybesmith.Orders;');
  const [products] = await connection.execute<any>('SELECT * FROM Trybesmith.Products;');
  const completeOrders = orders.map((order: {
    id: number,
    userId: number,
  }) => {
    const rightProducts = findRightProducts(products, order.id);
    return { ...order, productsIds: rightProducts };
  });
  return completeOrders;
};

export default {
  getAllModel,
};
