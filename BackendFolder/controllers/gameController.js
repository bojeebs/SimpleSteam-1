const { Games, Wishlist } = require('../models')


const GetGames = async (req, res) => {
    try {
      const games = await Games.findAll()
      res.send(games)
    } catch (error) {
      throw error
    }
  }
   
  const AddGames = async (req, res) => {
    try {
      const existingGame = await Wishlist.findOne({
        where: { userId: req.body.userId, gamesId: req.body.gamesId }
      })
      if (existingGame) {
        res.status(400).send('This game is already in your wishlist');
      } else {
      
        let user = await Wishlist.create({ userId: req.body.userId, gamesId: req.body.gamesId });
        res.send(user);
      }
    } catch (error) {
      throw error
    }
  }
  
module.exports = {
    GetGames,
    AddGames,
    // AddGameWishlist

}