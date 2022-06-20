const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const stockSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
    price: Number,
    sector: {
      type: String,
    },
    industry: {
      type: String,
    },
    address: {
      type: String,
    },
    marketCap: {
      type: Number,
    },
    earningsPerShare: {
      type: Number,
    },
    fiftyTwoWeekHigh: {
      type: Number,
    },
    fiftyTwoWeekLow: {
      type: Number,
    },
    searchCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = model('Stock', stockSchema);
