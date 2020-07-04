const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const colors = require('colors');

//Load environment variables
dotenv.config({ path: './config/config.env' });

//Connect to Database
connectDB();

//Require routes to make API calls to MongoDB
const workout = require('./routes/workout');

const app = express();
app.use(cors());

//Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configure API route
app.use('/submit', workout);



/////////////////////////////////////////////////////////////////////////////


const morgan = require('morgan');

const fileupload = require('express-fileupload');

const errorHandler = require('./middleware/error');

const cookieParser = require('cookie-parser');


//Import Router Files
const authTrainer = require('./routes/authTrainer');
const authClient = require('./routes/authClient');
const exercise = require('./routes/exercise');




//Dev Logger middleware - Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Set static folder public
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
app.use(express.json());

//Cookie-Parser middleware
app.use(cookieParser());

//File upload middleware
app.use(fileupload());

//Routes Middleware
app.use('/api/v1/trainer/auth', authTrainer);
app.use('/api/v1/client/auth', authClient);
app.use('/api/v1/trainer/exercises', exercise);
app.use('/api/v1/trainer/workouts', workout);

//Error Middleware
app.use(errorHandler);



/////////////////////////////////////////////////////////////////////////////////////////

//Define Port and Start server

const port = process.env.PORT || 5000;
app.listen(port, function (req, res) {
  console.log(`Server running at ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  });
}