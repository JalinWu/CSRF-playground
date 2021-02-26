const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Balance = require('../models/Balance');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
  let balanceInfo = await Balance.findOne({});
  res.render('dashboard', {
    user: req.user,
    balance: balanceInfo.balance
  })
  // res.render('dashboard', {
  //   user: req.user,
  //   balance: 5000
  // })
});

module.exports = router;
