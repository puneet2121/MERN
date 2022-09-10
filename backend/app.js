const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth');

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());

//Database
mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true
}).then(() => {
  console.log('We are connected to DB')
})

//Routes
app.use('/api',authRoutes);

//PORT
const port = process.env.PORT || 8000;

// Server
app.listen(port,() => {
  console.log(`App is running at ${port} `)
})
