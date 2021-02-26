const mongoose = require('mongoose');

const BalanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Balance = mongoose.model('Balance', BalanceSchema);

module.exports = Balance;
