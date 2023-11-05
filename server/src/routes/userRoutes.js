const express = require('express');
const router = express.Router();

const { authUserController } = require('../middlewares')

const {
    newUserController, loginUserController, editAvatarController, getUserController
} = require('../controllers/users');

router.post('/users/register', newUserController);

router.post('/users/login', loginUserController)

router.put('/users/avatar', authUserController, editAvatarController)

router.get('/users', authUserController, getUserController)

module.exports = router;


