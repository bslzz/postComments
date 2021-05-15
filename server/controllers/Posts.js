const { Posts } = require('../models')

module.exports = {
  createPosts: async (req, res) => {
    const post = req.body
    const result = await Posts.create(post)
    res.json({ result })
  },
  getAllPosts: async (req, res) => {
    const getAllPosts = await Posts.findAll()
    res.json({ getAllPosts })
  }
}
