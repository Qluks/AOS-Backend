const bcrypt = require('bcrypt');
const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const registerUsers = async (user) => {
  const { name, email, sexo, password, confirmPassword } = user;

  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedConfirmedPassword = await bcrypt.hash(confirmPassword, 10);

  const [registerUsers] = await connection.execute('INSERT INTO users(name, email, sexo, password, confirmPassword) VALUES (?, ?, ?, ?, ?)', [name, email, sexo, hashedPassword, hashedConfirmedPassword]);
  return { insertId: registerUsers.insertId };
};

const updatePassword = async (id, user) => {
  const { password, confirmPassword } = user;

  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedConfirmedPassword = await bcrypt.hash(confirmPassword, 10);

  const query = "UPDATE users SET password = ?, confirmPassword = ? WHERE id = ?";
  const [updatePassword] = await connection.execute(query, [hashedPassword, hashedConfirmedPassword, id]);
  return updatePassword;
};

module.exports = {
  getAll,
  registerUsers,
  updatePassword,
};
