const express = require('express')
const router = express.Router()
const Comments = require('../controllers/Comments')

router.route('/:postId').get(Comments.getComment)
router.route('/').post(Comments.postComment)

module.exports = router
