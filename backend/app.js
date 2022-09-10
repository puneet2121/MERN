const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());

mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true
}).then(() => {
  console.log('We are connected to DB')
})


const port = process.env.PORT || 8000;

app.listen(port,() => {
  console.log(`App is running at ${port} `)
})
