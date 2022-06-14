const mongoose = require('../config/database');
const Stock = require('../models/stockModel');

//? save the connection in a variable
const db = mongoose.connection;

//! Make sure code is not run till connected
db.on('open', async () => {
  const stocks = [
    {
      name: 'Marathon Digital Holdings Inc',
      symbol: 'MARA',
      description:
        'Marathon Digital Holdings, Inc. is a cryptocurrency mining digital asset technology company with a focus on the blockchain ecosystem and digital asset generation in the United States. The company is headquartered in Las Vegas, Nevada.',
      sector: '',
      industry: 'PATENT OWNERS & LESSORS',
      address: '1180 N. TOWN CENTER DRIVE, SUITE 100, LAS VEGAS, NV, US',
      marketCap: 801570000,
      earningsPerShare: -1.309,
      fiftyTwoWeekHigh: 83.45,
      fiftyTwoWeekLow: 6.13,
    },
  ];

  try {
    await Stock.deleteMany({});
    try {
      const newStocks = await Stock.create(stocks);
      console.log(newStocks);
      db.close();
    } catch (error) {
      console.log(error);
      db.close();
    }
  } catch (error) {
    console.log(error);
    db.close();
  }
});
