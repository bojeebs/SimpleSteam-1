const { GetUsers, CreateUser, DeleteUser, UpdateUser } = require ('../controllers/userController')
const Router = require('express').Router()


Router.get('/users', GetUsers)
Router.post('/', CreateUser)
Router.delete('/:user_id', DeleteUser)
Router.put('/users/:user_id', UpdateUser)

module.exports = Router