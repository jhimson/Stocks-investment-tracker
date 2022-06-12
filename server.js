require('dotenv').config(); // Load ENV Variables
require('./config/database');
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const app = express();

// ! Routers
const transactionsRoute = require('./routes/transactionsRoutes');
const usersRoute = require('./routes/usersRoutes');

// ! Middlewares
app.set('view engine', 'ejs');
app.use(morgan('dev')); //? logging
app.use(methodOverride('_method')); //? override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); //? parse urlencoded request bodies
app.use(express.static('public')); //? serve files from public statically

// ! Routes

// ! Index
app.get('/', (req, res) => {
  res.send('Welcome to TheHood');
});
app.get('/signup', (req, res) => {
  res.render('users/signupPage');
});


app.use('/transactions', transactionsRoute);
app.use('/users', usersRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
