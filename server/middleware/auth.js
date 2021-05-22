const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken')
  if (!accessToken)
    return res.status(400).json({ errMsg: 'User not logged in' })
  try {
    const validToken = jwt.verify(accessToken, process.env.JWT_SECRET)
    if (validToken) return next()
  } catch (error) {
    res.status(500).json({ errMsg: `${error}` })
  }
}

module.exports = validateToken
