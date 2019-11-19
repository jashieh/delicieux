const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

// Return recipe by a specific id,
router.get('/:id', (req, res) => {
  Recipe.findOne({ recipeId: req.body.recipeId })
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    recipeId: req.body.recipeId,
    sourceUrl: req.body.sourceUrl,
    extendedIngredients: req.body.extendedIngredients,
    nutrition: req.body.nutrition,
    cuisines: req.body.cuisines,
    diets: req.body.diets,
    spoonacularScore: req.body.spoonacularScore,
    servings: req.body.servings,
    ketogenic: req.body.ketogenic,
    vegan: req.body.vegan,
    vegetarian: req.body.vegetarian,
    glutenFree: req.body.glutenFree,
    dairyFree: req.body.dairyFree,
    veryPopular: req.body.veryPopular,
  });
  newRecipe.save()
    .then( recipe => res.json(recipe));
});


module.exports = router;