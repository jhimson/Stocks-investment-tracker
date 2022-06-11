const express = require('express');
const router = express.Router();
const { showTransactions } = require('../controllers/transactionsController');

router.get('/', showTransactions);

module.exports = router;
