const Router = require('express').Router()
const UserRouter = require('./UserRouter')


Router.use(UserRouter)




module.exports = Router