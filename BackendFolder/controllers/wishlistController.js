const { Wishlist, Users, Games } = require('../models')



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

  const GetUserWishlist = async (req, res) => {
    try {
      const users = await Wishlist.findAll(
        { where: 
          { userId: req.params.user_id}, 

          returning: true } 
      )
      res.send(users)
    } catch (error) {
      throw error
    }
  }



module.exports = {
CreateWishlist,
GetWishlist,
GetUserWishlist,



}