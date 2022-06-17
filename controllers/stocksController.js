const fetch = require('node-fetch');
const Watchlist = require('../models/watchlistsModel');
const Stock = require('../models/stockModel');
const searchStock = async (req, res) => {
  let result;

  try {
    await Stock.updateOne(
      { symbol: req.body.symbol },
      { $inc: { searchCount: 1 } }
    );

  } catch (error) {
    console.log(error.message);
  }

  try {
    // ! If req.param.symbol exists, assign it to be the value of req.body.symbol
    if (req.params.symbol) {
      req.body.symbol = req.params.symbol;
    }

    // ! Fetch stock price
    const responsePrice = await fetch(
      `https://api.twelvedata.com/price?symbol=${req.body.symbol}&apikey=${process.env.APIKEY1}&source=docs`
    );

    const { price } = await responsePrice.json();

    // ! If stock already exists in the database, use the data to feed the display for stock search and don't need to re-fetch from API
    let stock = await Stock.find({ symbol: req.body.symbol });
    if (stock.length) {
      result = stock[0];
    } else {
      //! Fetch logo from a different API
      const responseLogo = await fetch(
        `https://api.twelvedata.com/logo?symbol=${req.body.symbol}&apikey=${process.env.APIKEY1}&source=docs`
      );
      const { url } = await responseLogo.json();

      try {
        // ! If stock doesn't exists in the database, fetch the stock from the api then save it to the database
        const response = await fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.body.symbol}&apikey=${process.env.APIKEY2}`
        );
        const data = await response.json();

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

        let newStock = await Stock.create(result);
        result._id = newStock._id;
      } catch (error) {
        res
          .status(500)
          .json({ message: `Ticker symbol doesn't exist! Please try again` });
      }
    }
  } catch (error) {
    console.log(error.message);
  }

  try {
    if (result._id) {
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
