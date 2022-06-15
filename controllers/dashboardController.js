const Watchlist = require('../models/watchlistsModel');
const Transaction = require('../models/transactionsModel');

const renderDashboardPage = async (req, res) => {
  try {
    const watchlistsCount = await Watchlist.find({ user: req.session._id }).count()
    const transactionsCount = await Transaction.find({
      user: req.session._id,
    }).count()

    res.render('dashboard/index', {
      username: req.session.username,
      totalWatchlists: watchlistsCount,
      totalTransactions: transactionsCount,
      totalAssets: localStorage.getItem('totalAssets')
    });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

module.exports = { renderDashboardPage };
