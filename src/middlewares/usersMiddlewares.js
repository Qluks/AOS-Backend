const validateFieldEmail = (req, res) => {
  const { body } = req;

  if (body.email === undefined) {
    return res.status(400).json({ message: 'Email necessário!' });
  }

  if (body.email === "") {
    return res.status(400).json({ message: 'Email não pode estar vazio!' });
  }
};

module.exports = {
  validateFieldEmail,
};