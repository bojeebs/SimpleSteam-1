const { Wishlist, Games } = require('../models')
const { Op } = require('sequelize')

const DeleteGame = async (req, res) => {
    try {
      let gamesId = req.params.gamesId
      let userId = req.params.userId

      console.log(`gamesId: ${gamesId}`);
      console.log(`userId: ${userId}`);
      console.log(req.body, "YOOOOOO")
      await Wishlist.destroy({ where: { gamesId: gamesId, userId: userId } })
      res.send()
    } catch (error) {
      throw error
    }
  };

const CreateWishlist = async (req, res) => {
  try {
      let userBody = {
        ...req.body
    }
    let user = await Wishlist.create(userBody)
    res.send(user)
    console.log(user)
   } catch (error) {
     throw error
   }
  }

  const GetUserWishlistGames = async (req, res) => {
    try {
      // Retrieve all the wishlist items that match the specified userId
      const wishlistItems = await Wishlist.findAll({
        where: {
          userId: req.params.userId
        },
        raw: true,
        attributes: ['gamesId'],
      })
      // Extract all the gameId values into an array
      const gameIds = wishlistItems.map(item => item.gamesId)
      // Retrieve all the matching games based on the gameId values
      const games = await Games.findAll({
        where: {
          id: { [Op.in]: gameIds },
      },
      raw: true
       })
       // Send the games as the response
      res.send(games)
    } catch (error) {
      throw error
    }
  }
  


module.exports = {
CreateWishlist,
GetUserWishlistGames,
DeleteGame,



}