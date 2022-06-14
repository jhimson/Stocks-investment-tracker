const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const watchlistsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stocks: {
      type: [Schema.Types.ObjectId],
      ref: 'Stock'
    }
  },
  { timestamps: true }
);

module.exports = model('watchlist', watchlistsSchema);
