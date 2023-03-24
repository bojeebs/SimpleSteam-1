const { GetUsers, UpdateUserProfile } = require ('../controllers/userController')
const Router = require('express').Router()
const middleware = require('../middleware/index')


Router.get('/users',
    middleware.stripToken,
    middleware.verifyToken,
    GetUsers
 )

Router.put('/users/:user_id', UpdateUserProfile)



module.exports = Router