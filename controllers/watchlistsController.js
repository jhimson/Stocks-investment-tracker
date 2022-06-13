const Watchlist = require('../models/watchlistsModel');

//! GET ROUTE

const getAllWatchlists = async (req, res) => {
  try {
    const watchlists = await Watchlist.find({});
    res.render('watchlists/index', { watchlists });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllWatchlists,
};
