const express = require('express')
const router = express.Router()
const Users = require('../controllers/Users')
const validateToken = require('../middleware/auth')

router.route('/register').post(Users.register)
router.route('/login').post(Users.login)
router.route('/auth').get(validateToken, Users.validateUser)

module.exports = router
