const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WishlistRouter = require('./WishlistRouter')
const GameRouter = require('./GameRouter')


Router.use(UserRouter)
Router.use(WishlistRouter)
Router.use(GameRouter)



module.exports = Router