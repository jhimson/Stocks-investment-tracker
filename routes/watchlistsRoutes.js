const express = require('express');
const router = express.Router();

const { getAllWatchlists } = require('../controllers/watchlistsController');

router.get('/', getAllWatchlists);

module.exports = router;
