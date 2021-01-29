const express = require('express');

//Including Router in our App
const router = express.Router();

//Importing user controller for making requests
const userController = require('../controllers/users_controller');

const passport = require('passport');

//Profile page
router.get('/profile', passport.checkAuthentication, userController.profile);

//Sign Up page
router.get('/sign-up', userController.signUp);

//Sign In page
router.get('/sign-in', userController.signIn);


router.post('/create', userController.create);

//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local', { failureRedirect: '/users/sign-in' },
), userController.createSession)


router.get('/sign-out', userController.destroySession);

//exporting router
module.exports = router;