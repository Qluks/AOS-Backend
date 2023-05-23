const express = require('express');
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddlewares');
const animeController = require('./controllers/animeController');

const router = express.Router();

router.get('/users', usersController.getAll);
router.post('/users', usersMiddlewares.checkEmail, usersMiddlewares.checkPassword ,usersMiddlewares.validateFieldPassword ,usersController.registerUsers);

router.get('/anime', animeController.getAll);
router.post('/anime', animeController.postId);
router.delete('/anime/:object_id', animeController.deleteAnime);

module.exports = router;