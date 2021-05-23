const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body
      if (!username || !password)
        return res.status(400).json({ errMsg: 'All fields are mandatory' })

      const hashedPassword = await bcrypt.hash(password, 10)
      const result = await Users.create({
        username,
        password: hashedPassword
      })
      res.json(result)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body
      if (!username || !password)
        return res.status(400).json({ errMsg: 'All fields are mandatory' })

      const user = await Users.findOne({ where: { username: username } })
      if (!user) return res.status(400).json({ errMsg: 'User not found' })
      const matchPassword = await bcrypt.compare(password, user.password)
      if (!matchPassword)
        return res
          .status(400)
          .json({ errMsg: 'Username or Password not valid' })

      const accessToken = await jwt.sign(
        { username: user.username, id: user.id },
        process.env.JWT_SECRET
      )
      res.json(accessToken)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  },

  validateUser: async (req, res) => {
    try {
      await res.json(req.user)
      console.log(req.user)
    } catch (error) {
      res.status(500).json({ errMsg: `${error}` })
    }
  }
}
