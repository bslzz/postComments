const { Posts } = require('../models')

module.exports = {
  createPosts: async (req, res) => {
    try {
      const { title, postText, username } = req.body
      if (!title || !postText || !username)
        return res.status(400).json({ errMsg: `All fields are mandatory` })
      const result = await Posts.create({ title, postText, username })
      res.json(result)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const getAllPosts = await Posts.findAll()
      res.json(getAllPosts)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  },
  getPostById: async (req, res) => {
    try {
      const id = req.params.id
      // find by primary key
      const postById = await Posts.findByPk(id)
      res.json(postById)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  }
}
