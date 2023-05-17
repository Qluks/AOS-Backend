const Parse = require('parse/node');
const connection = require('./connection');
Parse.initialize('FrLZPOEsndCW47I6s5FAeQZrasMWHU0LOM9wrEbo', 'UIXbQnWRR7MA6cibuGsjstMseCJc2GZrwJV44pYt');
Parse.serverURL = 'https://parseapi.back4app.com/';

const getAll = async () => {
  const [anime] = await connection.execute('SELECT * FROM anime');
  return anime;
};

const addAnime = async (anime) => {
  const { foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id } = anime;
  const [addAnime] = await connection.execute('INSERT INTO anime(foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id]);
  return addAnime;
};

const deletAnime = async (object_id) => {
  const removedAnime = await connection.execute('DELETE FROM anime WHERE object_id', [object_id]);
  return removedAnime;
};

module.exports = {
  getAll,
  addAnime,
  deletAnime
};