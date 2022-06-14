const express = require('express');
const router = express.Router();
const { searchStock } = require('../controllers/apiController');

router.post('/search', searchStock);

module.exports = router;
