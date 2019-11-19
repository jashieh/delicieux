const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeIngredientSchema = new Schema({
  ingredientId: {
    type: Number,
    required: true
  },
  ingredientName: {
    type: String
  },
  // unit grams 
  amount: {
    type: Number,
    required: true
  }
});

module.exports = FridgeIngredient = mongoose.model('fridge_ingredient', FridgeIngredientSchema);
