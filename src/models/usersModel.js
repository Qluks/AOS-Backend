const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const registerUsers = async (user) => {
  const { name, email, sexo, password } = user;
  const [registerUsers] = await connection.execute('INSERT INTO users(name, email, sexo, password) VALUES (?, ?, ?, ?)', [name, email, sexo, password]);
  return {insertId: registerUsers.insertId};
};


module.exports = {
  getAll,
  registerUsers
};