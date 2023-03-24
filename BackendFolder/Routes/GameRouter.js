const Router = require('express').Router()
const { GetGames, AddGames } = require ('../controllers/gameController')
const middleware = require('../middleware/index')


Router.get('/games', 
    middleware.stripToken,
    middleware.verifyToken,
    GetGames 
)

Router.get('/', GetGames)

Router.post('/gamesadd',
    middleware.stripToken,
    middleware.verifyToken,
    AddGames 
)

module.exports = Router