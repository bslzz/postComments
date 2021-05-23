const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken')
  if (!accessToken)
    return res.status(400).json({ errMsg: 'User not logged in' })
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
      if (err)
        return res.status(401).json({ errMsg: 'Please login to post comments' })

      req.user = user
      next()
    })
  } catch (error) {
    res.status(500).json({ errMsg: `${error}` })
  }
}

module.exports = validateToken
