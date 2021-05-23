const express = require('express')
const router = express.Router()
const Comments = require('../controllers/Comments')
const validateToken = require('../middleware/auth')

router.route('/:postId').get(Comments.getComment)
router.route('/').post(validateToken, Comments.postComment)
router.route('/:commentId').delete(validateToken, Comments.deleteComment)

module.exports = router
