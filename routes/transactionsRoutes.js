const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
  deleteTransaction,
} = require('../controllers/transactionsController');

router.get('/', getAllTransactions);
router.get('/new', newTransaction);
router.post('/', createNewTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
