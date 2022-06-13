const mongoose = require('../config/database');
const Watchlist = require('../models/watchlistsModel');

//? save the connection in a variable
const db = mongoose.connection;

//! Make sure code is not run till connected
db.on('open', async () => {
  const watchlists = [
    {
      user: '62a62fb91a82f9aee8ae803b',
      name: 'Daily Watch',
    },
    {
      user: '62a62fb91a82f9aee8ae803b',
      name: 'Priority',
    },
    {
      user: '62a62fb91a82f9aee8ae803b',
      name: 'Dividends',
    },
  ];

  try {
    await Watchlist.deleteMany({});
    try {
      const newWatchlists = await Watchlist.create(watchlists);
      console.log(newWatchlists);
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
