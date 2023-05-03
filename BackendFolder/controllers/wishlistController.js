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
      const wishlistItems = await Wishlist.findAll({
        where: {
          userId: parseInt(req.params.userId),
        },
        raw: true,
        attributes: ["gamesId"],
      });
  
      const gameIds = wishlistItems.map((item) => item.gamesId);
  
      const games = await Games.findAll({
        where: {
          id: { [Op.in]: gameIds },
        },
        raw: true,
      });
  
      res.send(games);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while retrieving the wishlist games.");
    }
  };
  
  








  // const DeleteGame = async (req, res) => {
  //   try {
  //     let userId = parseInt(req.body.userId)
  //     await Wishlist.destroy({ where: { gamesId: req.body.gamesId, userId: userId } })
      
  //   } catch (error) {
  //     throw error
  //   }
  // };
//TODO:  search for games in game controller via search,
//TODO: add games to wishlist in game controller Middleware


module.exports = {
CreateWishlist,
GetWishlist,
GetUserWishlistGames,
DeleteGame,



}