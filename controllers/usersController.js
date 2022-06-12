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

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      try {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          //! store some properties in the session object
          req.session._id = user._id;
          req.session.username = username;
          req.session.loggedIn = true;
          console.log(req.session);
          //? Redirect to transactions page if successful
          res.redirect('/transactions');
        } else {
          res.json({ error: `Password doesn't match` });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      res.json({ error: "User doesn't exist!" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  //? Destroy session and redirect to main page
  req.session.destroy((err) => {
    res.redirect('/');
  });
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
