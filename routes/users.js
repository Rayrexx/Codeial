const express = require('express');

//Including Router in our App
const router = express.Router();

//Importing user controller for making requests
const userController = require('../controllers/users_controller');

//Profile page
router.get('/profile', userController.profile);

//Sign Up page
router.get('/sign-up', userController.signUp);

//Sign In page
router.get('/sign-in', userController.signIn);


router.post('/create', userController.create);

router.post('/create-session', userController.createSession);


//exporting router
module.exports = router;