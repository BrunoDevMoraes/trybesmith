import ordersModel from '../models/ordersModel';

const getAllService = () => {
  const allOrders = ordersModel.getAllModel();
  return allOrders;
};

export default {
  getAllService,
};