const fetch = require('node-fetch');
const Watchlist = require('../models/watchlistsModel');
const searchStock = async (req, res) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.body.symbol}&apikey=${process.env.APIKEY}`
  );
  const data = await response.json();
  let result = {
    symbol: data.Symbol,
    name: data.Name,
    description: data.Description,
    country: data.Country,
    sector: data.Sector,
    industry: data.Industry,
    address: data.Address,
    marketCap: parseFloat(data.MarketCapitalization),
    earningsPerShare: parseFloat(data.EPS),
    fiveTwoWeekHigh: parseFloat(data['52WeekHigh']),
    fiveTwoWeekLow: parseFloat(data['52WeekLow']),
  };
  try {
    const watchLists = await Watchlist.find({ user: req.session._id });
    res.render('results/index', { result, watchLists });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  searchStock,
};
