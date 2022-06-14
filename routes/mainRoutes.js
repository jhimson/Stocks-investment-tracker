const express = require('express');
const router = express.Router();
const {
  renderDashboardPage,
  renderLoginPage,
  renderSignupPage,
} = require('../controllers/mainController');

router.get('/', renderLoginPage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);
router.get('/dashboard', renderDashboardPage);

module.exports = router;
