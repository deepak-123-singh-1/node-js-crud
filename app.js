const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Set up express-session middleware
app.use(session({
  secret: 'your_secret_here',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));
app.use(flash());


// Set the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/nodeDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/', require('./routes/web'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));