const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WishlistRouter = require('./WishlistRouter')


Router.use(UserRouter)
Router.use(WishlistRouter)



module.exports = Router