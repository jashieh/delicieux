const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  ingredientId: {
    type: Number,
    required: true,
    index: true
  },
  
});