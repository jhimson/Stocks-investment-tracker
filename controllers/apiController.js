const fetch = require('node-fetch');
const Watchlist = require('../models/watchlistsModel');
const Stock = require('../models/stockModel');
const searchStock = async (req, res) => {
  let result;
  try {
    // ! Fetch stock price

    const responsePrice = await fetch(
      `https://api.twelvedata.com/price?symbol=${req.body.symbol}&apikey=${process.env.APIKEY1}&source=docs`
    );

    const { price } = await responsePrice.json();

    // ! If stock already exists in the database, use the data to feed the display for stock search and don't need to re-fetch from API
    const stock = await Stock.find({ symbol: req.body.symbol });
    if (stock.length) {
      result = stock[0];
    } else {
      // ! If stock doesn't exists in the database, fetch the stock from the api then save it to the database
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.body.symbol}&apikey=${process.env.APIKEY2}`
      );
      const data = await response.json();

      //! Fetch logo from a different API
      const responseLogo = await fetch(
        `https://api.twelvedata.com/logo?symbol=${req.body.symbol}&apikey=${process.env.APIKEY1}&source=docs`
      );
      const { url } = await responseLogo.json();
      result = {
        logo: url,
        symbol: data.Symbol,
        name: data.Name,
        price: parseFloat(price),
        description: data.Description,
        sector: data.Sector,
        industry: data.Industry,
        address: data.Address,
        marketCap: parseFloat(data.MarketCapitalization),
        earningsPerShare: parseFloat(data.EPS),
        fiftyTwoWeekHigh: parseFloat(data['52WeekHigh']),
        fiftyTwoWeekLow: parseFloat(data['52WeekLow']),
      };

      await Stock.create(result);
    }
  } catch (error) {
    console.log(error.message);
  }

  try {
    if (result) {
      const watchLists = await Watchlist.find({ user: req.session._id });
      res.render('results/index', { result, watchLists });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  searchStock,
};
