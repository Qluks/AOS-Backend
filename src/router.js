const express = require('express');
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddlewares');
const animeController = require('./controllers/animeController');
const noticeControler = require('./controllers/noticeController');

const router = express.Router();

router.get('/users', usersController.getAll);
router.post('/users', usersMiddlewares.checkEmail, usersMiddlewares.checkPassword ,usersMiddlewares.validateFieldPassword ,usersController.registerUsers);
router.put('/users/:id', usersController.updatePassword);

router.get('/anime', animeController.getAll);
<<<<<<< HEAD
router.post('/anime', animeController.postId);
=======
router.post('/anime', animeController.addAnime);
>>>>>>> 9f648a7f52ee08b76b753e3c6c50aeea3371d6be
router.delete('/anime/:object_id', animeController.deleteAnime);

router.get('/notice',noticeControler.getAll);

module.exports = router;