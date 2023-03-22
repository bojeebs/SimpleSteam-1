const { Users } = require('../models')
const middleware = require('../Middleware/index.js')


const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        username: user.username,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await Users.create({ username: username, email: email, password: passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await Users.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const UpdateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const { username, email, password } = req.body;

    // Hash the password before updating it in the database
    const passwordDigest = await middleware.hashPassword(password);

    const updatedUser = await User.update(
      {
        username,
        email,
        password: passwordDigest, //hash password
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    res.json(updatedUser[1][0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  UpdateProfile
}
