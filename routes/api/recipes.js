const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get("/test", (req, res) => res.json({ msg: "This is the recipes route for meal plan" }));

// Return recipe by a specific id,
// NOTE: FINDONE ALWAYS SUCCEEDS...DOESN'T RETURN A PROMISE
router.get('/:recipeId', (req, res) => {
  Recipe.findOne({ recipeId: req.params.recipeId })
    .then(
      recipe => {
        if (recipe)
          res.json(recipe);
        else
          res.status(400).json({error: "NOT FOUND"});
      }
    );
});
  
// Adding a recipe from search by recipe ID API Call
router.post('/indiv', (req, res) => {
  console.log(req.body);
  const newRecipe = new Recipe({
    recipeId: req.body.id,
    title: req.body.title,
    image: req.body.image,
    sourceUrl: req.body.sourceUrl,
    sourceName: req.body.sourceName,
    ingredients: req.body.extendedIngredients,
    nutrition: req.body.nutrition.nutrients,
    servings: req.body.servings,
    spoonacularScore: req.body.spoonacularScore,
    cuisines: req.body.cuisines,
    diets: req.body.diets,
    dishtypes: req.body.dishtypes,
    readyInMinutes: req.body.readyInMinutes,
    dairyFree: req.body.dairyFree,
    glutenFree: req.body.glutenFree,
    ketogenic: req.body.ketogenic,
    vegan: req.body.vegan,
    vegetarian: req.body.vegetarian,
    veryPopular: req.body.veryPopular,
  });
  newRecipe.save()
    .then(
      recipe => res.json(recipe),
      err => res.status(400).json(err)
    );
});

// Adding recipe from search coComplexComplexComplexmplex index API Call
router.post('/item', (req, res) => {
  const newRecipe = new Recipe({
    recipeId: req.body.id,
    title: req.body.title,
    image: req.body.image,
    sourceUrl: req.body.sourceUrl,
    sourceName: req.body.sourceName,
    ingredients: req.body.missedIngredients,
    nutrition: req.body.nutrition,
    servings: req.body.servings,
    spoonacularScore: req.body.spoonacularScore,
    cuisines: req.body.cuisines,
    diets: req.body.diets,
    dishtypes: req.body.dishtypes,
    readyInMinutes: req.body.readyInMinutes,
    dairyFree: req.body.dairyFree,
    glutenFree: req.body.glutenFree,
    ketogenic: req.body.ketogenic,
    vegan: req.body.vegan,
    vegetarian: req.body.vegetarian,
    veryPopular: req.body.veryPopular
  });
  newRecipe.save() // TODO: figure out if unique constraint works
    .then(
      recipe => res.json(recipe),
      err => res.status(400).json(err)
    );
});

//Modifying image of picture
router.patch('/:recipeId/picture', (req, res)=> {
  Recipe.findOneAndUpdate({ recipeId: req.params.recipeId }, {image: req.body.image})
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
});

module.exports = router;