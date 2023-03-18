const { CreateWishlist, GetWishlist, GetUserWishlist} = require ('../controllers/wishlistController')
const Router = require('express').Router()


Router.get('/wishlist/get', GetWishlist)
Router.post('/wishlist', CreateWishlist)
Router.get('/wishlist/:user_id', GetUserWishlist)
//Router.delete('/:user_id', DeleteUser)
//Router.put('/users/:user_id', UpdateUser)


module.exports = Router