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

const updatePassward = async (id, user) => {
  const { password, confirmPassword } = user;
  const query = "UPDATE users SET password = ?, confirmPassword = ? WHERE id = ?";

  const [updatePassward] = await connection.execute(query, [password, confirmPassword, id]);
  return updatePassward;
};


module.exports = {
  getAll,
  registerUsers,
  updatePassward
};