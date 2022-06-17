const Watchlist = require('../models/watchlistsModel');

//! GET ROUTE
const getAllWatchlists = async (req, res) => {
  try {
    const watchlists = await Watchlist.find({ user: req.session._id }).populate(
      'stocks'
    );
    res.render('watchlists/index', {
      watchlists,
      username: req.session.username,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! NEW ROUTE
const newWatchlist = async (req, res) => {
  res.render('watchlists/newWatchlistPage');
};

//! SEARCH ROUTE
const searchWatchlist = async (req, res) => {
  console.log(req.body);
  try {
    const watchlist = await Watchlist.find({
      name: { $regex: req.body.watchlist_id },
      user: req.session._id,
    }).populate('stocks');
    res.render('watchlists/showWatchlistPage', {
      watchlist,
      username: req.session.username,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! CREATE ROUTE
const createWatchList = async (req, res) => {
  req.body.user = req.session._id;
  try {
    await Watchlist.create(req.body);
    res.redirect('/watchlists');
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

// ! EDIT ROUTE
const editWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    res.render('watchlists/editWatchlistPage', { watchlist });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! UPDATE ROUTE
const updateWatchList = async (req, res) => {
  try {
    await Watchlist.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect('/watchlists');
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! ADD STOCK ROUTE
const addStockToWatchlist = async (req, res) => {
  const { id, name } = req.params;
  try {
    const stock = await Watchlist.find({ name, stocks: { $in: [id] } });
    console.log(stock.length);

    if (stock.length === 0) {
      try {
        const watchList = await Watchlist.findOne({ name });
        watchList.stocks.push(id);
        await watchList.save();
        res.redirect('/watchlists');
      } catch (error) {
        res.sendStatus(500).json({ message: error.message });
      }
    } else {
      res.json({
        message: 'Stock already exists in the watchlist! Please try again',
      });
    }
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! REMOVE/PULL STOCK ROUTE
const removeStock = async (req, res) => {
  console.log('test');
  const { watchlist_id, stock_id } = req.params;
  console.log(watchlist_id);
  try {
    await Watchlist.updateOne(
      { _id: watchlist_id },
      { $pull: { stocks: stock_id } },
      { new: true }
    );
    res.redirect('/watchlists');
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

//! DELETE ROUTE
const deleteWatchlist = async (req, res) => {
  try {
    await Watchlist.deleteOne({ _id: req.params.id });
    res.redirect('/watchlists');
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

module.exports = {
  getAllWatchlists,
  deleteWatchlist,
  newWatchlist,
  createWatchList,
  updateWatchList,
  editWatchlist,
  addStockToWatchlist,
  removeStock,
  searchWatchlist,
};
