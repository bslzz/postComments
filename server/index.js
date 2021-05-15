const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const db = require('./models')

//routes
app.use('/posts', require('./routes/Posts'))

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
})
