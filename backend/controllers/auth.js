exports.signup = (req,res) => {
  console.log("Req body",req.body)
  res.json({
    message:'user signup'
  })
}

exports.signout = (req,res) => {
  res.json({
    message: 'the user is signed out'
  })
}