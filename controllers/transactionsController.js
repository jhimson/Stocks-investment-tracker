const Transaction = require('../models/transactionsModel');

const showTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.render('/stocks/index', {transactions});
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  showTransactions,
};
