const express = require('express');
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddlewares');
const favoriteController = require('./controllers/favoriteController');

const router = express.Router();

router.get('/users', usersController.getAll);
router.post('/users', usersMiddlewares.checkEmail, usersMiddlewares.checkPassword ,usersMiddlewares.validateFieldPassword ,usersController.registerUsers);

router.get('/favorites', favoriteController.getAll);
router.post('/favorites', favoriteController.postId);

module.exports = router;