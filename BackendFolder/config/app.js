const express = require('express')
const cors = require('cors')
//const logger = require('morgan') https://www.npmjs.com/package/morgan it just writes on to the console what actions are made example: POST /api/login 401 23.184 ms - 9 I didn't install this package you can install it if you want
const app = express()

const AppRouter = require('../routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
//app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))