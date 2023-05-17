const favoriteModel = require('../models/favoriteModel');

const getAll = async (req, res) => {
    const favorite = await favoriteModel.getAll();
    return res.status(200).json(favorite);
};

const postId = async (req, res) => {
    const postId = await favoriteModel.postId(req.body);
    return res.status(201).json(postId);
};

module.exports = {
    getAll,
    postId
}