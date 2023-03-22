const { Games, Wishlist } = require('../models')


const GetGames = async (req, res) => {
    try {
      const games = await Games.findAll()
      res.send(games)
    } catch (error) {
      throw error
    }
  }
  
  //const DeleteGame 
  const AddGames = async (req, res) => {
    try {
      const existingGame = await Wishlist.findOne({
        where: { userId: req.body.userId, gamesId: req.body.gamesId }
      })
      if (existingGame) {
        res.status(400).send('This game is already in your wishlist');
      } else {
        console.log(existingGame)
        let user = await Wishlist.create({ userId: req.body.userId, gamesId: req.body.gamesId });
        res.send(user);
      }
    } catch (error) {
      throw error
    }
  }
  // const AddGames = async (req, res) => {
  //   try {

      
  //     //let user = await Wishlist.create(gamesBody)
  //   let user = await Wishlist.create({userId: req.body.userId, gamesId: req.body.gamesId})

  //     res.send(user)
  //     console.log(user)
  //    } catch (error) {
  //      throw error
  //    }
  // }  

  const AddGameWishlist = async (req, res) => { // fix this maybe later?
    try {
        const { userId } = req.body;
        const gamesId = req.params.game_id;
        
        const newWishlistItem = await Wishlist.create({
          userId: userId,
          gamesId: gamesId
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