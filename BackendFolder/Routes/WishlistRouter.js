const { CreateWishlist, GetWishlist, GetUserWishlistGames, DeleteGame} = require ('../controllers/wishlistController')
const Router = require('express').Router()


Router.get('/wishlist/get', GetWishlist)
Router.post('/wishlist', CreateWishlist)
Router.get('/wishlist/:user_id', GetUserWishlistGames)
Router.delete('/wishlist/:games_id', DeleteGame)
//Router.put('/users/:user_id', UpdateUser)


module.exports = Router