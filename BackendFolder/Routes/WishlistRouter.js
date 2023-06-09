const { CreateWishlist, GetUserWishlistGames, DeleteGame} = require ('../controllers/wishlistController')
const Router = require('express').Router()
const middleware = require('../Middleware/index')


// Router.get('/wishlist',
//     middleware.stripToken,
//     middleware.verifyToken,
//     GetWishlist
//  )
Router.post('/wishlist/get',
    middleware.stripToken,
    middleware.verifyToken,
    CreateWishlist
 )
Router.get('/wishlist/:userId',
    // middleware.createToken,
    // middleware.stripToken,
    // middleware.verifyToken,
    GetUserWishlistGames
 )
Router.delete('/wishlists/:userId/:gamesId',
    middleware.stripToken,
    middleware.verifyToken,
    DeleteGame
 )


module.exports = Router