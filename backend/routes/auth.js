const express = require('express')
const router = express.Router()
const { signout,signup,signin,isSignedIn } = require('../controllers/auth')
const { check } = require('express-validator');

router.post('/signup',[
  check("name", 'name should be 3 char').isLength({ min: 3 }),
  check("email", 'email is required').isEmail(),
  check("password", 'password should have 5 char').isLength({ min: 3 })
],
signup
);
router.post('/signin',
[
  check("email", 'email is required').isEmail(),
  check("password", 'password is required').isLength({ min: 3 })
],
signin
);

router.get("/signout", signout)

router.get("/testroute", isSignedIn,(req,res) => {
  res.send('A proteced route');
});

module.exports = router;

