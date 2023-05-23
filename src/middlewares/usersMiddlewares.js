const checkEmail = (req, res, next) => {
  const { body } = req;

  if (body.email === undefined) {
    return res.status(400).json({ message: 'Email necessário!' });
  }

  if (body.email === "") {
    return res.status(400).json({ message: 'Email não pode estar vazio!' });
  }

  next();
};

const checkPassword = (req, res, next) => {
  const { body } = req;

  if (body.password === undefined) {
    return res.status(400).json({ message: 'Email necessário!' });
  }

  if (body.password === "") {
    return res.status(400).json({ message: 'Email não pode estar vazio!' });
  }

  next();
};

const validateFieldPassword = (req, res, next) => {
  const { body } = req;

  if (body.password !== body.confirmPassword) {
    return res.status(400).json({ message: 'Ambas as senha devem ser iguais' }); 
  }

  next();
};

module.exports = {
  checkEmail,
  checkPassword,
  validateFieldPassword
};