const express = require('express');
const router = express.Router();

const {createProduct,getProductById} = require('../controllers/product');
const {isSignedIn, isAuth, isAdmin} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

//params
router.param('userId',getUserById);
router.param('product',getProductById)

//routes
router.post('/product/create/:userId',
isSignedIn, 
isAuth,
isAdmin,
createProduct)

module.exports = router;