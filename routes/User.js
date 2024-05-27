const express = require('express');

const router = express.Router();

const {getUser,CreateUser,UpdateUser,getAllUsers,DeleteUser} = require('../controllers/UserController')

router.route('/user').get(getUser).post(CreateUser).delete(DeleteUser).put(UpdateUser);

router.route('/users').get(getAllUsers);

module.exports = router;