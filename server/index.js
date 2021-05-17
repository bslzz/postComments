const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const db = require('./models')

app.use(cors())
//body
app.use(express.json())

//routes
app.use('/posts', require('./routes/Posts'))
app.use('/comments', require('./routes/Comments'))
app.use('/users', require('./routes/Users'))

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
})
