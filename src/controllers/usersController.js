const usersModel = require('../models/usersModel');

const getAll = async (req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { email } = req.params; // Extrai o parâmetro "email" da URL
  const user = await usersModel.getById(email); // Passa o parâmetro "email" para a função "getById"
  return res.status(200).json(user);
};

const registerUsers = async (req, res) => {
  const registerUsers = await usersModel.registerUsers(req.body);
  return res.status(201).json(registerUsers);
};

const updatePassword = async (req, res) => {
  const registerUsers = await usersModel.updatePassword(req.body);
  return res.status(201).json(registerUsers);
};

module.exports = {
  getAll,
  registerUsers,
  updatePassword,
  getById
};