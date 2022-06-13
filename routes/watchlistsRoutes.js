const express = require('express');
const router = express.Router();

const { getAllWatchlists, deleteWatchlist } = require('../controllers/watchlistsController');

router.get('/', getAllWatchlists);
router.delete('/:id', deleteWatchlist);

module.exports = router;
