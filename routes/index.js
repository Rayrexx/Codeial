const express = require('express');

//Including Router in our App
const router = express.Router();

//Importing home controller for making requests
const homeController = require('../controllers/home_controller');

//Home page
router.get('/', homeController.home);
router.use('/users', require('./users'));


//exporting router
module.exports = router;