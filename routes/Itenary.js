const express = require('express')
const router = express.Router()
const {getItenaries} = require('../controllers/ItenaryController')
const loginAuth = require('../middlewares/authMiddleware')

router.route('/').get(loginAuth,getItenaries)

module.exports = router;