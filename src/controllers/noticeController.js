const noticeModel = require('../models/noticeModel');

const getAll = async (req, res) => {
  const notice = await noticeModel.getAll();
  return res.status(200).json(notice);
};

module.exports = {
  getAll,
};