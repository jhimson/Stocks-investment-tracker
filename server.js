require('dotenv').config(); // Load ENV Variables
require('./config/database');
const express = require('express'); // import express
const app = express();

const middleware = require('./utils/middleware');

// ! Routers
const transactionsRoute = require('./routes/transactionsRoutes');
const usersRoute = require('./routes/usersRoutes');
const watchlistsRoute = require('./routes/watchlistsRoutes');
const apiRoute = require('./routes/apiRoutes');
const dashboardRoute = require('./routes/dashboardRoutes');

app.set('view engine', 'ejs');

//! middlewares
middleware(app);

// ! Index
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/signup', (req, res) => {
  res.render('users/signupPage');
});

app.get('/login', (req, res) => {
  res.render('users/loginPage');
});

app.use('/transactions', transactionsRoute);
app.use('/users', usersRoute);
app.use('/watchlists', watchlistsRoute);
app.use('/api', apiRoute);
app.use('/dashboard', dashboardRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
