const express = require('express'); // require the express in a variable
const app = express();  

const port = 3000  // dec a variable port  

// app.get('/', (req, res) => {        //get request(Get the data) 
//   res.send('Hello World!')   
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/',(req,res) => {
  res.send('hello world')
})
app.get('/signout',(req,res) => {
  res.send('you are signed out')
})
const admin = (req,res) => {
  res.send('this is the admin dashboard')
}
const isLogin = (req,res,next) => {
  console.log('is logged in ');
  next();
}
app.get('/admin',isLogin, admin)

app.get('/signup',(req,res) => {
  res.send('you are signed up')
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
