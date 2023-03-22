const router = require('express').Router();
const controller = require('../controllers/authController'); // instead of exporting and importing functions one by one we just import the file completly to access all of the functions by using controller.
const middleware = require('../middleware/index');
const {requireAuth} = require('../middleware');

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.put('/profile', requireAuth, controller.UpdateProfile);


module.exports = router