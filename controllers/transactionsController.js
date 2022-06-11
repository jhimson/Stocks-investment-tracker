const Transaction = require('../models/transactionsModel');

//! GET ROUTE
//? Retrieve all transactions from the database
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.render('transactions/index', { transactions });
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
    await Transaction.create(req.body);
    console.log('Successfully created transaction');

    res.redirect('/transactions');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//! DELETE ROUTE
const deleteTransaction = async(req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
    res.redirect('/transactions')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
  deleteTransaction
};
