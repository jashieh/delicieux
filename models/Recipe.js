const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// NOTE: MUST CREATE A UNIQUE INDEX ON recipeId ON MONGODB WEBSITE
const RecipeSchema = new Schema({
  // Core Information
  recipeId: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: "",
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
  // extendedIngredients: [], //Probably don't need this until we maybe add custom recipes!!
  
  nutrition: [],
  servings: Number,
  
  // Selector Properties, optional depending on DB cost
  cookingMinute: Number,
  spoonacularScore: Number,
  cuisines: [],
  diets: [],
  dishtypes: [],
  
  // Booleans
  dairyFree: Boolean,
  glutenFree: Boolean,
  ketogenic: Boolean,
  vegan: Boolean,
  vegetarian: Boolean,
  veryPopular: Boolean,
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);

