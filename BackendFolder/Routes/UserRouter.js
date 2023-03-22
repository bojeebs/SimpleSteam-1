const { GetUsers, CreateUser, DeleteUser, UpdateUser } = require ('../controllers/userController')
const Router = require('express').Router()
const middleware = require('../middleware/index')


Router.get('/users',
    middleware.stripToken,
    middleware.verifyToken,
    GetUsers
 )
//Router.post('/', CreateUser)
// Router.delete('/:user_id',
//     middleware.stripToken,
//     middleware.verifyToken,
//     DeleteUser
//  )
//Router.put('/users/:user_id', UpdateUser)

module.exports = Router