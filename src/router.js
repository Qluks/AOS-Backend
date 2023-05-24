const express = require('express');
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddlewares');
const animeController = require('./controllers/animeController');
const noticeControler = require('./controllers/noticeController');
const catalogoController = require('./controllers/catalogoController');

const router = express.Router();

router.get('/users', usersController.getAll);
router.post('/users', usersMiddlewares.checkEmail, usersMiddlewares.checkPassword ,usersMiddlewares.validateFieldPassword ,usersController.registerUsers);
router.put('/users/:id', usersController.updatePassword);

router.get('/anime', animeController.getAll);
router.post('/anime', animeController.addAnime);
router.delete('/anime/:object_id', animeController.deleteAnime);

router.get('/notice',noticeControler.getAll);

router.get('/catalogo', catalogoController.getAll);

module.exports = router;