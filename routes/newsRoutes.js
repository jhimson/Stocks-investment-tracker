const express = require('express');
const router = express.Router();
const { fetchTopHeadlines } = require('../controllers/newsController');

router.get('/', fetchTopHeadlines);

module.exports = router;
