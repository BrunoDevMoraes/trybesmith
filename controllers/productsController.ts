const productsService = require('../services/productsService');

const getAllController = async (_req, res) => {
  try {
    const allProducts = await productsService.getAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllController,
};
