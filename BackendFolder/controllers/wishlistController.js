const { Wishlist, Users, Games } = require('../models')
const { Op } = require('sequelize')


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

  const GetWishlist = async (req, res) => {
    try {
      const users = await Wishlist.findAll()
      res.send(users)
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
  

  const DeleteGame = async (req, res) => {
    try {
      let games_id = parseInt(req.params.games_id);
      await Wishlist.destroy({ where: { gamesId: games_id } });
      res.send(`deleted game id ${games_id}`)
    } catch (error) {
      throw error
    }
  };
//TODO:  search for games in game controller via search,
//TODO: add games to wishlist in game controller Middleware


module.exports = {
CreateWishlist,
GetWishlist,
GetUserWishlistGames,
DeleteGame,



}