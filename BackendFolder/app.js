const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

const AppRouter = require('./Routes/AppRouter')

const PORT = process.env.PORT || 3001

// Set up CORS options
const corsOptions = {
  origin: ['http://localhost:3000', 'https://your-deployed-site.com'],
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization']
};



app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)

// Remove the following middleware since it's no longer needed
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
