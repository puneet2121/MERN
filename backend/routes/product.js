const express = require('express');
const router = express.Router();

const {} = require('../controllers/product');
const {isSignedIn, isAuth, isAdmin} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

//params
router.param('userId',getUserById);
router.param('product',getProductById)

//routes

module.exports = router;