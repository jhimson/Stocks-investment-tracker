//* -------------------------------------------------------------------------- */
//*                           Import Our Dependencies                          */
//* -------------------------------------------------------------------------- */
require('dotenv').config(); // Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const path = require('path');

//! Create our Express Application Object Bind Liquid Templating Engine
const app = express();
//* -------------------------------------------------------------------------- */
//*                                 Middlewares                                */
//* -------------------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.use(morgan('dev')); //? logging
app.use(methodOverride('_method')); //? override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); //? parse urlencoded request bodies
app.use(express.static('public')); //? serve files from public statically

//* -------------------------------------------------------------------------- */
//*                                   Routes                                   */
//* -------------------------------------------------------------------------- */
app.get('/', (req, res) => {
    res.render('index')
})

//* -------------------------------------------------------------------------- */
//*                               Server Listener                              */
//* -------------------------------------------------------------------------- */
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
