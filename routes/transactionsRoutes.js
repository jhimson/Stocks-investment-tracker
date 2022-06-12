const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  newTransaction,
  createNewTransaction,
  deleteTransaction,
  editTransaction,
  updateTransaction,
} = require('../controllers/transactionsController');

//! Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
});

router.get('/', getAllTransactions);
router.get('/new', newTransaction);
router.get('/edit/:id', editTransaction);
router.post('/', createNewTransaction);
router.delete('/:id', deleteTransaction);
router.put('/:id', updateTransaction);

module.exports = router;
