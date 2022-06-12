const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');

//! CREATE USER
const createUser = async (req, res) => {
  //? encrypt password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );

  try {
    const user = await User.find({ username: req.body.username }).count();
    if (user) {
      res.json({ message: 'Username already exists!' });
    } else {
      //? If username doesn't exist in the datase, create new user
      try {
        await User.create(req.body);
        res.redirect('/');
      } catch (error) {
        console.log(error.message);
        res.json({ error });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
