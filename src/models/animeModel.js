const connection = require('./connection');

const getAll = async () => {
    const [anime] = await connection.execute('SELECT * FROM anime');
    return anime;
};

const addAnime = async (anime) => {
    const { foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id } = anime;
    const [addAnime] = await connection.execute('INSERT INTO anime(foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id]);
    return addAnime;
};

const deleteAnime = async (object_id) => {
    const removedAnime = await connection.execute('DELETE FROM anime WHERE object_id = ?', [object_id]);
    return removedAnime;
};

module.exports = {
  getAll,
  addAnime,
  deleteAnime
};