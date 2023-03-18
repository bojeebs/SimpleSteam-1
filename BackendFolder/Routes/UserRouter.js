const { GetUsers, CreateUser, DeleteUser } = require ('../controllers/userController')
const Router = require('express').Router()


Router.get('/users', GetUsers)
Router.post('/', CreateUser)
Router.delete('/:user_id', DeleteUser)


module.exports = Router