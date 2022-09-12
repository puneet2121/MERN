const express = require('express');
const router = express.Router();

const {getCategoryById,createCategory,getAllCategory, deleteCategory,updateCategory,getCategory} = require('../controllers/category');
const { isAdmin, isAuth, isSignedIn } = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

router.param('userId', getUserById);
router.param('categoryId',getCategoryById);

//actual routers 
router.post('/category/create/:userId',
isSignedIn,
 isAuth,
 isAdmin, 
 createCategory)

 //read routes
 router.get('/category/:categoryId', getCategory);
 router.get('/categories', getAllCategory);

 //update routes
 router.put('/category/:categoryId/:userId',
 isSignedIn,
 isAuth,
 isAdmin, 
 updateCategory)

 //delete routes
 router.delete('/category/:categoryId/:userId',
 isSignedIn,
 isAuth,
 isAdmin, 
 deleteCategory)

module.exports = router;