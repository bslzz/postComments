const { Posts } = require('../models')

module.exports = {
  createPosts: async (req, res) => {
    try {
      const { title, postText, username } = req.body
      if (!title || !postText || !username) {
        return res.status(400).json({ msg: `All fields are mandatory` })
      } else {
        const result = await Posts.create({ title, postText, username })
        res.json(result)
      }
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
