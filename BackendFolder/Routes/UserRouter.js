const { GetUsers } = require ('../controllers/userController')
const Router = require('express').Router()


Router.get('/users', GetUsers)




module.exports = Router