const express = require('express');

const router = express.Router();

const {getUser,UpdateUser,getAllUsers,DeleteUser} = require('../controllers/UserController')

router.route('/user/:id').get(getUser).delete(DeleteUser).patch(UpdateUser);

router.route('/user').get(getAllUsers);

module.exports = router;