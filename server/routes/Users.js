const express = require('express')
const router = express.Router()
const Users = require('../controllers/Users')

router.route('/register').post(Users.register)
router.route('/login').post(Users.login)

module.exports = router
