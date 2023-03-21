const Router = require('express').Router()
const { GetGames, AddGames, AddGameWishlist } = require ('../controllers/gameController')
const middleware = require('../middleware/index')


Router.get('/games', 
    //middleware.stripToken,
    //middleware.verifyToken,
    GetGames 
)
Router.post('/gamesadd',
    middleware.stripToken,
    middleware.verifyToken,
    AddGames 
)
Router.post('/game/:game_id',
    middleware.stripToken,
    middleware.verifyToken,
    AddGameWishlist
 )

module.exports = Router