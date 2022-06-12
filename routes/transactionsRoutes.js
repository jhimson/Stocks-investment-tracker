const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
  deleteTransaction,
  editTransaction,
  updateTransaction
} = require('../controllers/transactionsController');

router.get('/', getAllTransactions);
router.get('/new', newTransaction);
router.get('/edit/:id', editTransaction);
router.post('/', createNewTransaction);
router.delete('/:id', deleteTransaction);
router.put('/:id', updateTransaction);

module.exports = router;
