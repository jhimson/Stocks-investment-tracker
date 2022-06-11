const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    tickerSymbol: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
    stockPrice: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model('Transaction', transactionSchema);
