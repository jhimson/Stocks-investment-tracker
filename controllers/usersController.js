const User = require('../models/usersModel');
const Transaction = require('../models/transactionsModel');
let LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
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

          // !! Retrieve all the transactions from the DB and calculate total Assets
          try {
            const transactions = await Transaction.find({
              user: req.session._id,
            });
            let totalBuy = 0;
            let totalSell = 0;
            if (transactions) {
              let buyTransactions = transactions.filter(
                ({ type }) => type === 'Buy'
              );
              let sellTransactions = transactions.filter(
                ({ type }) => type === 'Sell'
              );

              buyTransactions.forEach(({ stockPrice, quantity }) => {
                let product = 0;
                product = stockPrice * quantity;
                totalBuy += product;
              });

              sellTransactions.forEach(({ stockPrice, quantity }) => {
                let product = 0;
                product = stockPrice * quantity;
                totalSell += product;
              });

              localStorage.setItem('totalAssets', `${totalBuy - totalSell}`);
            }
          } catch (error) {
            res.status(500).json({ message: error.message });
          }

          //? Redirect to transactions page if successful
          res.redirect('/dashboard');
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
