const { Comments } = require('../models')

module.exports = {
  getComment: async (req, res) => {
    try {
      const postId = req.params.postId
      const comments = await Comments.findAll({ where: { PostId: postId } })
      res.json(comments)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  },

  postComment: async (req, res) => {
    try {
      const comment = req.body
      const result = await Comments.create(comment)
      res.json(result)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  }
}
