const Watchlist = require('../models/watchlistsModel');
const Transaction = require('../models/transactionsModel');

const renderLoginPage = async (req, res) => {
  res.render('users/loginPage');
};

const renderSignupPage = async (req, res) => {
  res.render('users/signupPage');
};
const renderDashboardPage = async (req, res) => {
  res.render('main/index');
};

module.exports = {
  renderDashboardPage,
  renderLoginPage,
  renderSignupPage,
};
