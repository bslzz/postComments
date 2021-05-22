const express = require('express')
const router = express.Router()
const Comments = require('../controllers/Comments')
const validateToken = require('../middleware/auth')

router.route('/:postId').get(Comments.getComment)
router.route('/').post(validateToken, Comments.postComment)

module.exports = router
