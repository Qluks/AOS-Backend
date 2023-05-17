const animeModel = require('../models/animeModel');

const getAll = async (req, res) => {
    const anime = await animeModel.getAll();
    return res.status(200).json(anime);
};

const addAnime = async (req, res) => {
    const addAnime = await animeModel.addAnime(req.body);
    return res.status(201).json(addAnime);
};

const deleteAnime = async (req, res) => {
    const { object_id } = req.params;
    await animeModel.deletAnime(object_id);
    return res.status(204).json();
}

module.exports = {
    getAll,
    addAnime,
    deleteAnime
};