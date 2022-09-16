const express = require('express');
const router = express.Router();

const {createProduct,getAllProducts,getProductById,getAllUniqueCategories,getproduct,photo,updateProduct,deleteProduct} = require('../controllers/product');
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


//Read routes
router.get('/product/:productId',getproduct)
router.get('/product/photo/:productId',photo)


//Update routes
router.put('/product/:productId/:userId',
isSignedIn, 
isAuth,
isAdmin,
updateProduct
)

//Delete routes
router.delete('/product/:productId/:userId',
isSignedIn, 
isAuth,
isAdmin,
deleteProduct
)

//listing routes
router.get("/products",getAllProducts);

router.get('/products/categories',getAllUniqueCategories)
module.exports = router;