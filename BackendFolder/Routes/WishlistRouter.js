const { CreateWishlist, GetWishlist, GetUserWishlistGames, DeleteGame} = require ('../controllers/wishlistController')
const Router = require('express').Router()
const middleware = require('../middleware/index')


Router.get('/wishlist/get',
    middleware.stripToken,
    middleware.verifyToken,
    GetWishlist
 )
Router.post('/wishlist',
    middleware.stripToken,
    middleware.verifyToken,
    CreateWishlist
 )
Router.get('/wishlist/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    GetUserWishlistGames
 )
Router.delete('/wishlist/:games_id',
    middleware.stripToken,
    middleware.verifyToken,
    DeleteGame
 )
//Router.put('/users/:user_id', UpdateUser)


module.exports = Router