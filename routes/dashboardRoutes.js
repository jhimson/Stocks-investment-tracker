const express = require('express');
const router = express.Router();
const { renderDashboardPage } = require('../controllers/dashboardController');

router.get('/', renderDashboardPage);

module.exports = router;
