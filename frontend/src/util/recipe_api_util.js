import axios from 'axios';

const apiKey = '74796f8377434d6a9de79e615fb0d2c1';

export const getRandomRecipe = () => {
  return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
};

export const getRecipeById = (id, includeNutrition = false) => {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${apiKey}`);
};

// Input ids as an array
export const getMultipleRecipes = (ids) => {
  const idString = ids.join(',');
  return axios.get(`https://api.spoonacular.com/recipes/informationBulk?${idString}&apiKey=${apiKey}`);
};

// Ingredients as array. Ranking 1 means maximize used ingredients and ranking 2 means minimize missed ingredients
export const getRecipesByIngredients = (ingredients, limit = 5, ranking = 2, ignorePantry = true) => {
  const query = ingredients.join(',');
  return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${limit}&apiKey=${apiKey}`);
};



// Search for recipe by name.  Returns title and id of recipe. Will return anything that starts with query string.
export const searchRecipeByName = (name, limit = 5) => {
  return axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${name}&number=${limit}&apiKey=${apiKey}`);
};


export const getSimilarRecipes = (id, limit = 5) => {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/similar?number=${limit}&apiKey=${apiKey}`);
};


// Returns array of substitutes under key 'substitutes'
export const getIngredientSubstitutes = (ingredientName) => {
  return axios.get(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${apiKey}`);
};

// Extract recipe from site url and return as object
export const extractRecipe = (url) => {
  return axios.get(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${apiKey}`);
};



