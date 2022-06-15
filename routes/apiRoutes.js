const express = require('express');
const router = express.Router();
const { searchStock } = require('../controllers/apiController');

router.post('/search', searchStock);
router.get('/search/:symbol', searchStock)

module.exports = router;
