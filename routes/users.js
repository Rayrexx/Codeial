const express = require('express');

//Including Router in our App
const router = express.Router();

//Importing user controller for making requests
const userController = require('../controllers/users_controller');

//Profile page
router.get('/profile', userController.profile);


//exporting router
module.exports = router;