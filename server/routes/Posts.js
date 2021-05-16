const express = require('express')
const router = express.Router()
const Posts = require('../controllers/Posts')

router.route('/').post(Posts.createPosts)
router.route('/').get(Posts.getAllPosts)
router.route('/:id').get(Posts.getPostById)

module.exports = router
