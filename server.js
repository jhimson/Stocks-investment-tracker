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
const mainRoute = require('./routes/mainRoutes');

app.set('view engine', 'ejs');

//! middlewares
middleware(app);

app.use('/', mainRoute)
app.use('/transactions', transactionsRoute);
app.use('/users', usersRoute);
app.use('/watchlists', watchlistsRoute);
app.use('/api', apiRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
