const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  dates: {}
});

module.exports = Cart = mongoose.model('carts', CartSchema);