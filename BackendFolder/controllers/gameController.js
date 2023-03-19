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
        let gamesBody = {
          ...req.body
      }
      let user = await Games.create(gamesBody)
      res.send(user)
      console.log(user)
     } catch (error) {
       throw error
     }
  }  

  const AddGameWishlist = async (req, res) => { // fix this maybe later?
    try {
        const userId = req.user.id;
        const gameId = req.params.game_id;
        
        const newWishlistItem = await Wishlist.create({
          userId: userId,
          gameId: gameId
        });
    
        res.send(newWishlistItem);
    } catch (error) {
      throw error
    }
  }
  
//   const GetGames = async (req, res) => {
//     try {
//       const limit = 10 // number of games to load
//       const offset = parseInt(req.query.page) * limit || 0 // page number (0-indexed)
//       const games = await Games.findAll({ limit, offset })
//       res.send(games)
//     } catch (error) {
//       throw error
//     }
//   }


module.exports = {
    GetGames,
    AddGames,
    AddGameWishlist

}