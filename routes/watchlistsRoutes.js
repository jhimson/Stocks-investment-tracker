const express = require('express');
const router = express.Router();

const {
  getAllWatchlists,
  deleteWatchlist,
  newWatchlist,
  createWatchList,
  updateWatchList,
  editWatchlist,
  addStockToWatchlist,
} = require('../controllers/watchlistsController');

//! Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
});

router.get('/', getAllWatchlists);
router.get('/new', newWatchlist);
router.get('/edit/:id', editWatchlist);
router.get('/:id/:name',addStockToWatchlist)
router.post('/', createWatchList);
router.put('/edit/:id', updateWatchList);
router.delete('/:id', deleteWatchlist);

module.exports = router;
