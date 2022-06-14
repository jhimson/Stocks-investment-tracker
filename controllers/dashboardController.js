const Watchlist = require('../models/watchlistsModel');
const Transaction = require('../models/transactionsModel');

const renderDashboardPage = (req, res) => {
  res.render('dashboard/index', { username: req.session.username });
};

module.exports = { renderDashboardPage };
