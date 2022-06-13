const express = require('express');
const router = express.Router();

const {
  getAllWatchlists,
  deleteWatchlist,
  newWatchlist,
} = require('../controllers/watchlistsController');

router.get('/', getAllWatchlists);
router.get('/new', newWatchlist);
router.delete('/:id', deleteWatchlist);

module.exports = router;
