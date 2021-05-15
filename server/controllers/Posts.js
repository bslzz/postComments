const { Posts } = require('../models')

module.exports = {
  createPosts: async (req, res) => {
    try {
      const post = req.body
      const result = await Posts.create(post)
      res.json(result)
    } catch (error) {
      res.status(500).json({ msg: `${error}` })
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const getAllPosts = await Posts.findAll()
      res.json(getAllPosts)
    } catch (error) {
      res.status(500).json({ msg: `${error}` })
    }
  }
}
