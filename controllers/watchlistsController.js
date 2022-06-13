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

//! CREATE ROUTE
const createWatchList = async (req, res) => {
  req.body.user = req.session._id;
  try {
    await Watchlist.create(req.body);
    res.redirect('/watchlists');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ! EDIT ROUTE
const editWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    res.render('watchlists/editWatchlistPage', { watchlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! UPDATE ROUTE
const updateWatchList = async (req, res) => {
  try {
    await Watchlist.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect('/watchlists');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
  createWatchList,
  updateWatchList,
  editWatchlist
};
