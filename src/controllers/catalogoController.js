const catalogoModel = require('../models/catalogoModel');

const getAll = async (req, res) => {
  const catalogo = await catalogoModel.getAll();
  return res.status(200).json(catalogo);
};

module.exports = {
  getAll,
};