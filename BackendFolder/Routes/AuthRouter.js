const Router = require('express').Router();
const controller = require('../controllers/authController'); // instead of exporting and importing functions one by one we just import the file completly to access all of the functions by using controller.
const middleware = require('../Middleware/index');
const {requireAuth} = require('../Middleware');

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)


module.exports = Router