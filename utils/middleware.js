const express = require('express');
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = (app) => {
  app.use(morgan('dev')); //? logging
  app.use(methodOverride('_method')); //? override for put and delete requests from forms
  app.use(express.urlencoded({ extended: true })); //? parse urlencoded request bodies
  app.use(express.static('public')); //? serve files from public statically
  app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
      saveUninitialized: true,
      resave: false,
    })
  );
};
