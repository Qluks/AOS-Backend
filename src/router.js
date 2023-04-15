const express = require('express');
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddlewares');
const router = express.Router();

router.get('/users', usersController.getAll);
router.post('/users', usersMiddlewares.validateFieldEmail, usersController.registerUsers);

module.exports = router;