const fetch = require('node-fetch');
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
    fiveTwoWeekHigh: parseFloat(data["52WeekHigh"]),
    fiveTwoWeekLow: parseFloat(data["52WeekLow"]),

  }
  res.render('results/index', {result})
};

module.exports = {
  searchStock,
};
