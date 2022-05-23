import productsModel from '../models/productsModel';

const getAllService = () => {
  const allProducts = productsModel.getAllProductsModel();
  return allProducts;
};

const createProductService = (payload: {
  name: string;
  amount: string;
}) => {
  const product = productsModel.createProductModel(payload.name, payload.amount);
  return product;
};

export default {
  getAllService,
  createProductService,
};
