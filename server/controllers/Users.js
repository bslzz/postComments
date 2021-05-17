const { Users } = require('../models')
const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body
      if (!username || !password)
        return res.status(400).json({ msg: 'All fields are mandatory' })

      const hashedPassword = await bcrypt.hash(password, 10)
      const result = await Users.create({
        username,
        password: hashedPassword
      })
      res.json(result)
    } catch (error) {
      res.status(500).json({ msg: `${error}` })
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body
      if (!username || !password)
        return res.status(400).json({ msg: 'All fields are mandatory' })

      const user = await Users.findOne({ where: { username: username } })
      if (!user) return res.status(400).json({ msg: 'User not found' })
      const matchPassword = await bcrypt.compare(password, user.password)
      if (matchPassword) {
        res.json(user)
      } else {
        return res.status(400).json({ msg: 'Username or Password not valid' })
      }
    } catch (error) {
      res.status(500).json({ msg: `${error}` })
    }
  }
}
