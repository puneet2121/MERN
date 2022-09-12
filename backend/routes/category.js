const express = require('express');
const router = express.Router();

const {getCategoryById,createCategory} = require('../controllers/category');
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

module.exports = router;