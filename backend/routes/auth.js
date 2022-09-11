const express = require('express')
const router = express.Router()
const { signout,signup } = require('../controllers/auth')
const { check } = require('express-validator');

router.post('/signup',[
  check("name", 'name should be 3 char').isLength({ min: 3 }),
  check("email", 'email is required').isEmail(),
  check("password", 'password should have 5 char').isLength({ min: 3 })
],
signup);
router.get("/signout", signout)

module.exports = router;

