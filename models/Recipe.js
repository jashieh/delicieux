const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  // Core Pieces
  title: {
    type: String
    // required: true
  },
  recipeId: {
    type: Number,
    // required: true,
    index: true
  },
  sourceUrl: {
    type: String
    // required: true
  },
  ingredients: [new Schema({
    id: Number,
    amount: Number,
    unit: String,
    name: String,
    image: String
  })],

  image: String,
  // Probably don't need this until we maybe add custom recipes!!
  // extendedIngredients: [],

  nutrition: [],
  
  // Selectors, can add or remove based on costliness of DB
  cuisines: [],
  diets: [],
  spoonacularScore: Number,
  servings: Number,
  ketogenic: Boolean,
  vegan: Boolean,
  vegetarian: Boolean,

  glutenFree: Boolean,
  dairyFree: Boolean,
  veryPopular: Boolean,
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);

