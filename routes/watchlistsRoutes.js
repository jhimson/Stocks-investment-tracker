const express = require('express');
const router = express.Router();

const {
  getAllWatchlists,
  deleteWatchlist,
  newWatchlist,
  createWatchList,
  updateWatchList,
} = require('../controllers/watchlistsController');

router.get('/', getAllWatchlists);
router.get('/new', newWatchlist);
router.post('/', createWatchList);
router.put('/edit/:id', updateWatchList);
router.delete('/:id', deleteWatchlist);

module.exports = router;
