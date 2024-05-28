const express = require('express');

const router = express.Router();

const {getUser,CreateUser,UpdateUser,getAllUsers,DeleteUser} = require('../controllers/UserController')

router.route('/:id').get(getUser).delete(DeleteUser).patch(UpdateUser);

router.route('/').get(getAllUsers).post(CreateUser);

module.exports = router;