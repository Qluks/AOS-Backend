const usersModel = require('../models/usersModel');

const getAll = async (req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const registerUsers = async (req, res) => {
  const registerUsers = await usersModel.registerUsers(req.body);
  return res.status(201).json(registerUsers);
};

const registerUsers = async (req, res) => {
  const registerUsers = await usersModel.registerUsers(req.body);
  return res.status(201).json(registerUsers);
};

module.exports = {
  getAll,
  registerUsers,
};