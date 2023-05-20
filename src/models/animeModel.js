const connection = require('./connection');
const user = require('../models/usersModel')

const getAll = async (name, password) => {
  const isAuthenticated = await user.authenticateUser(name, password);

  if (isAuthenticated) {
    const [anime] = await connection.execute('SELECT * FROM anime');
    return anime;
  } else {
    throw new Error('Credenciais inválidas');
  }
};

const addAnime = async (name, password, anime) => {
  const isAuthenticated = await user.authenticateUser(name, password);

  if (isAuthenticated) {
    const { foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id } = anime;
    const [addAnime] = await connection.execute('INSERT INTO anime(foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [foto_url, titulo, descricao, created_at, updated_at, generos, idade, object_id]);
    return addAnime;
  } else {
    throw new Error('Credenciais inválidas');
  }
};

const deleteAnime = async (name, password, object_id) => {
  const isAuthenticated = await user.authenticateUser(name, password);

  if (isAuthenticated) {
    const removedAnime = await connection.execute('DELETE FROM anime WHERE object_id = ?', [object_id]);
    return removedAnime;
  } else {
    throw new Error('Credenciais inválidas');
  }
};

module.exports = {
  getAll,
  addAnime,
  deleteAnime
};