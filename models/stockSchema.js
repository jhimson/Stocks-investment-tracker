const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const stockSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  logo: {
    type: String
  }
});

module.exports = model('Stock', stockSchema);
