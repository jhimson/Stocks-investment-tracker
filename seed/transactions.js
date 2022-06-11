const mongoose = require('../config/database');
const Transaction = require('../models/transactionsModel')

//? save the connection in a variable
const db = mongoose.connection;

//! Make sure code is not run till connected
db.on('open', async () => {

  const transactions = [
    { 
        type: 'Buy', 
        tickerSymbol: 'MARA',
        quantity: 200,
        stockPrice: 7.88,
    },
    { 
        type: 'Buy', 
        tickerSymbol: 'AAPL',
        quantity: 10,
        stockPrice: 144,
    },
    { 
        type: 'Sell', 
        tickerSymbol: 'NFLX',
        quantity: 150,
        stockPrice: 188,
    },
  ];

  try {
    await Transaction.deleteMany({});
        try {
            Transaction.create(transactions);
            db.close();
        } catch (error) {
            res.status(500).json({message: error.message})
            db.close();
        }
  } catch (error) {
    res.status(500).json({message: error.message});
    db.close();
  }

});
