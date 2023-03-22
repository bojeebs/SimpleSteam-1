const { GetUsers, CreateUser, DeleteUser, UpdateUserProfile } = require ('../controllers/userController')
const Router = require('express').Router()
const middleware = require('../middleware/index')
const { hashPassword } = require('../middleware/index');


Router.get('/users',
    middleware.stripToken,
    middleware.verifyToken,
    GetUsers
 )
//Router.post('/', CreateUser)

Router.delete('/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    DeleteUser
 )
Router.put('/users/:user_id', UpdateUserProfile)

 Router.delete('/:user_id',
     middleware.stripToken,
    middleware.verifyToken,
    DeleteUser
  )
//Router.put('/users/:user_id', UpdateUser)


module.exports = Router