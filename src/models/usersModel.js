const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const registerUsers = async (user) => {
  const { name, email, sexo, password, confirmPassword } = user;
  const [registerUsers] = await connection.execute('INSERT INTO users(name, email, sexo, password, confirmPassword) VALUES (?, ?, ?, ?, ?)', [name, email, sexo, password, confirmPassword]);
  return {insertId: registerUsers.insertId};
};


module.exports = {
  getAll,
  registerUsers,
};