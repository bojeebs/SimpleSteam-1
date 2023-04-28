const { Users, Wishlist } = require('../models')
const { hashPassword } = require('../Middleware');




const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}


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