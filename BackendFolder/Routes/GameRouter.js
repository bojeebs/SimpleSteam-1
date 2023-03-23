const Router = require('express').Router()
const { GetGames, AddGames, AddGameWishlist } = require ('../controllers/gameController')
const middleware = require('../middleware/index')
const { getSteamData } = require ('../controllers/steamController')


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

Router.get('/steamdata', async (req, res) => {
    try {
      const apiUrl = 'https://store.steampowered.com/api/appdetails?appids=53';
      const steamData = await getSteamData(apiUrl);
      res.json(steamData)
    } catch (error) {
      
    }
  })
// Router.post('/game/:game_id',
//     middleware.stripToken,
//     middleware.verifyToken,
//     AddGameWishlist
//  )

module.exports = Router