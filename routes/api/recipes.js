const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get("/test", (req, res) => res.json({ msg: "This is the recipes route for meal plan" }));

// Return recipe by a specific id,
router.get('/:id', (req, res) => {
  Recipe.findOne({ recipeId: req.body.id })
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
});

router.get('/test1', (req, res) => {
//   axios({
//     "method": "GET",
//     "url": "https://api.spoonacular.com/recipes/random",
//     "headers": {
//       // "Access-Control-Allow-Headers": "x-rapidapi-host, x-rapidapi-key",
//       // "content-type": "application/octet-stream",
//       "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       "x-rapidapi-key": "f9ba977a04msha79dcdbd3b845c1p1e804ajsn0a5620f33ad5"
//     }
//   }).then(recipe => res.json(recipe))
//   .catch(err => res.status(400).json(err))
// }
  axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "be025cdd9bmsh49601abc3099f49p1c31fdjsn618acb311b0a"
    }, "params": {
      "diet": "vegetarian",
      "excludeIngredients": "coconut",
      "intolerances": "egg%2C gluten",
      "number": "10",
      "offset": "0",
      "type": "main course",
      "query": "cheese burger"
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      res.json(response)
    })
    .catch((error) => {
      console.log(error)
    })
  });
// Adding a recipe from search by recipe ID API Call
router.post('/indiv', (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    recipeId: req.body.id,
    sourceUrl: req.body.sourceUrl,
    image: req.body.image,
    ingredients: req.body.extendedIngredients,
    nutrition: req.body.nutrition.nutrients,
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

// Adding recipe from search complex index API Call
router.post('/item', (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    recipeId: req.body.id,
    sourceUrl: req.body.sourceUrl,
    image: req.body.image,
    ingredients: req.body.missedIngredients,
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
    .then(recipe => res.json(recipe));
});
//Modifying image of picture
router.patch('/:id/picture', (req, res)=> {
  Recipe.findOneAndUpdate({ recipeId: req.body.recipeId }, {image: req.body.email})
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
});

module.exports = router;