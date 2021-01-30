const express = require('express');

//Including Router in our App
const router = express.Router();

const postsController =  require('../controllers/posts_controller');


router.post('/create', postsController.create);

module.exports = router;