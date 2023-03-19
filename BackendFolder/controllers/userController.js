const { Users } = require('../models')


const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

 const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body
  }
  let user = await Users.create(userBody)
  res.send(user)
 } catch (error) {
   throw error
 }
}


const DeleteUser = async(req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    await Users.destroy({ where: { id: ownerId}, cascade: true })
    res.send(`deleted user id ${ownerId} and their wishlist`)
  } catch (error) {
    throw error
  }
}

 const UpdateUser = async(req,res) => {
  try {
    let ownerId = await Users.update(
      {...req.body },
      { where:{ id: req.params.user_id }, returning: true }
    )
    res.send(ownerId)
    } catch (error) {
      throw error
    }
  } 
  
 










module.exports = {
GetUsers,
CreateUser,
DeleteUser,
UpdateUser,



}