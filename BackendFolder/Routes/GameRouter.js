const Router = require('express').Router()
const { GetGames, AddGames, AddGameWishlist } = require ('../controllers/gameController')


Router.get('/games', GetGames )
Router.post('/gamesadd', AddGames )
Router.post('/game/:game_id', AddGameWishlist)

module.exports = Router