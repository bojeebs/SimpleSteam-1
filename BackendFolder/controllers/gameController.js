const { Games, Wishlist } = require('../models')


const GetGames = async (req, res) => {
  try {
    const games = await Games.findAll();
    res.status(200).send(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ status: 'Error', msg: 'Unable to fetch games' });
  }
};

  
  //const DeleteGame 
  const AddGames = async (req, res) => {
    try {
      const existingGame = await Wishlist.findOne({
        where: { userId: req.body.userId, gamesId: req.body.gamesId },
      });
      if (existingGame) {
        res.status(400).send("This game is already in your wishlist");
      } else {
        let user = await Wishlist.create({
          userId: req.body.userId,
          gamesId: req.body.gamesId,
        });
        res.send(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while adding the game to the wishlist.");
    }
  };
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