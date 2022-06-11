const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('transactions/index')
});

module.exports = router;
