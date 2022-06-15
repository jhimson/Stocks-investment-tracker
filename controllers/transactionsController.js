const Transaction = require('../models/transactionsModel');
let LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

//! GET ROUTE
//? Retrieve all transactions from the database
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.session._id,
    });
    let totalBuy = 0;
    let totalSell = 0;
    if (transactions) {
      // console.log(transactions)
      let buyTransactions = transactions.filter(({ type }) => type === 'Buy');
      let sellTransactions = transactions.filter(({ type }) => type === 'Sell');

      buyTransactions.forEach(({ stockPrice, quantity }) => {
        let product = 0;
        product = stockPrice * quantity;
        totalBuy += product;
      });

      sellTransactions.forEach(({ stockPrice, quantity }) => {
        let product = 0;
        product = stockPrice * quantity;
        totalSell += product;
      });

      console.log(`TOTAL BUYZZZ: ${totalBuy}`);
      console.log(`TOTAL SELZZZZ: ${totalSell}`);
      console.log(`TOTAL ASSETZZZ: ${totalBuy - totalSell}`);

      console.log(`Buy Trans: ${buyTransactions}`);
      console.log(`Sell Trans: ${sellTransactions}`);
       localStorage.setItem(
      'totalAssets',
      `${totalBuy - totalSell}`
    );
    }
   
    res.render('transactions/index', {
      transactions,
      username: req.session.username,
      totalAsset: totalBuy - totalSell,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! NEW ROUTE
const newTransaction = async (req, res) => {
  res.render('transactions/newTransactionPage');
};

//! CREATE ROUTE
const createNewTransaction = async (req, res) => {
  try {
    req.body.user = req.session._id;
    await Transaction.create(req.body);
    console.log('Successfully created transaction');

    res.redirect('/transactions');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! DELETE ROUTE
const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.redirect('/transactions');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ! EDIT ROUTE
const editTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.render('transactions/editTransactionPage', { transaction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ! UPDATE ROUTE
const updateTransaction = async (req, res) => {
  const { name, tickerSymbol, type, stockPrice, quantity, date } = req.body;
  try {
    await Transaction.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name,
          tickerSymbol,
          type,
          stockPrice,
          quantity,
          date,
        },
      }
    );
    console.log('Successfully updated transaction');
    res.redirect('/transactions');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
  deleteTransaction,
  editTransaction,
  updateTransaction,
};
