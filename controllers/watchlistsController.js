const Watchlist = require('../models/watchlistsModel');

//! GET ROUTE
const getAllWatchlists = async (req, res) => {
  try {
    const watchlists = await Watchlist.find({});
    res.render('watchlists/index', {
      watchlists,
      username: req.session.username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! NEW ROUTE
const newWatchlist = async (req, res) => {
  res.render('watchlists/newWatchlistPage');
};

//! DELETE ROUTE
const deleteWatchlist = async (req, res) => {
  try {
    await Watchlist.deleteOne({ _id: req.params.id });
    res.redirect('/watchlists');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllWatchlists,
  deleteWatchlist,
  newWatchlist,
};
