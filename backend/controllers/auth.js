const User = require('../models/user');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const expressJwt  = require("express-jwt");

//------------------signup-----------------------------

exports.signup = (req,res) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    res.status(422).json(
      {
        error: errors.array()[0].msg
      }
    )
  }

  const user = new User(req.body)
  user.save((err,user) => {
    if(err) {
      return res.status(400).json({
        err: 'Not able to save user in database'
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  })
}
//------------------signin-----------------------------
exports.signin = (req,res) => {
  const {email,password} = req.body;
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    res.status(422).json(
      {
        error: errors.array()[0].msg
      }
    )
  }
  User.findOne({email}, (err,user) => {
    if(err|| !user) {
      return res.status(400).json({
        error: "user does not exist"
      })
    }
    if(!user.autheticate(password)) {
      return res.status(401).json({
        error:"Email and password do not match"
      })
    }
    const token = jwt.sign({_id: user._id}, process.env.SECRET)

    //cookies
    res.cookie("token",token,{expire: new Date() + 9999});

    //send res to front-end
    const {_id, name, email, role} = user;
    return res.json({token,user: {_id, name, email, role}})

  })
}

//------------------signout-----------------------------
exports.signout = (req,res) => {
  res.json({
    message: 'the user is signed out'
  })
}