const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WishlistRouter = require('./WishlistRouter')
const GameRouter = require('./GameRouter')
const AuthRouter = require('./AuthRouter')


Router.use(UserRouter)
Router.use(WishlistRouter)
Router.use(GameRouter)
Router.use(AuthRouter)



module.exports = Router