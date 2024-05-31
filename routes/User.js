const express = require('express');

const router = express.Router();

const {getUser,UpdateUser,getAllUsers,DeleteUser} = require('../controllers/UserController')

router.route('/:id').get(getUser).delete(DeleteUser).patch(UpdateUser);

router.route('/').get(getAllUsers);

module.exports = router;