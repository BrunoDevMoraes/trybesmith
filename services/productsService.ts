const productsModel = require('../models/productsModel');

const getAllService = () => {
  const allProducts = productsModel.getAllModel();
  return allProducts;
};

module.exports = {
  getAllService,
};