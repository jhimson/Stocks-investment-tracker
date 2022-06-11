const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
} = require('../controllers/transactionsController');

router.get('/', getAllTransactions);
router.get('/new', newTransaction);
router.post('/create', createNewTransaction);

module.exports = router;
