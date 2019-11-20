const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeIngredientSchema = new Schema({
  ingredientId: {
    type: Number,
    required: true,
    index: true
  },
  ingredientName: {
    type: String
  },
  fridgeId: {
    type: String,
    required: true,
    index: true
  },
  // unit grams 
  amount: {
    type: Number,
    required: true
  }
});

module.exports = FridgeIngredient = mongoose.model('fridge_ingredient', FridgeIngredientSchema);
