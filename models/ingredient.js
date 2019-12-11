const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
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

module.exports = Ingredient = mongoose.model('ingredient', IngredientSchema);
