require('dotenv').config(); // Load ENV Variables
require('./config/database');
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');

// ! Routers
const transactionsRoute = require('./routes/transactionsRoutes');
const usersRoute = require('./routes/usersRoutes');

// ! Middlewares
app.set('view engine', 'ejs');
app.use(morgan('dev')); //? logging
app.use(methodOverride('_method')); //? override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); //? parse urlencoded request bodies
app.use(express.static('public')); //? serve files from public statically

//! middleware to setup session
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
);

// ! Index
app.get('/', (req, res) => {
  res.redirect('/login')
});

app.get('/signup', (req, res) => {
  res.render('users/signupPage');
});

app.get('/login', (req, res) => {
  res.render('users/loginPage');
});

app.use('/transactions', transactionsRoute);
app.use('/users', usersRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
