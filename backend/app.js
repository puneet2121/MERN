const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:', 
{useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true
}).then(() => {
  console.log('We are connected to DB')
})




const port = 8000;

app.listen(port,() => {
  console.log(`App is running at ${port} `)
})
