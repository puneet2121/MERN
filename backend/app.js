const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')

//all Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product')

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
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);

//PORT
const port = process.env.PORT || 8000;

// Server
app.listen(port,() => {
  console.log(`App is running at ${port} `)
})
