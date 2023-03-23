const { Users, Wishlist } = require('../models')
const { hashPassword } = require('../middleware/index');


const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

//  const CreateUser = async (req, res) => {
//   try {
//     let userBody = {
//       ...req.body
//   }
//   let user = await Users.create(userBody)
//   res.send(user)
//  } catch (error) {
//    throw error
//  }
// }


// const DeleteUser = async(req, res) => {
//   try {
//     let ownerId = parseInt(req.params.user_id)
//     await Users.destroy({ where: { id: ownerId }, cascade: true })
//     await Wishlist.destroy({ where: { userId: ownerId } })
//     res.send(`deleted user id ${ownerId} and their wishlist`)
//   } catch (error) {
//     throw error
//   }
// }

//  const UpdateUser = async(req,res) => {
//   try {
//     let ownerId = await Users.update(
//       {...req.body },
//       { where:{ id: req.params.user_id }, returning: true }
//     )
//     res.send(ownerId)
//     } catch (error) {
//       throw error
//     }
//   } 
const UpdateUserProfile = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const { username: username, email: email, password: password } = req.body;

    if (username !== undefined) {
      await Users.update(
        { username: username },
        { where: { id: userId } }
      );
    }
    if (email !== undefined) {
      await Users.update(
        { email: email },
        { where: { id: userId } }
      );
    }
    if (req.body.password !== undefined) {
      let hashedPassword = await hashPassword(password);
      await Users.update(
        { password: hashedPassword },
        { where: { id: userId } }
      );
    }
    res.send(`User with id ${userId} has been updated.`);
  } catch (error) {
    throw error;
  }
}

module.exports = {
GetUsers,
//CreateUser,
UpdateUserProfile,
//DeleteUser,
//UpdateUser,




}