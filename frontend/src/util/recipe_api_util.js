import axios from 'axios';

const apiKey = '74796f8377434d6a9de79e615fb0d2c1';
// const apiKey = '7b45ae7dd73747a98a9ae6b4abd8a345';

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


// cuisine: string => italian, korean, american, chinese, etc. as lowercase
// diet: string => vegetarian, ketogenic, gluten free
// includeIngredients: string => tomato, cheese, noodles
// sort: string => calories, cholesterol, carbohydrates
// sortDirection: asc/desc 
// maxCalories/minCalories: int 
// maxFat/maxCarbs: int
// ignorePantry: true/false
// fillIngredients: true/false

export const complexRecipeSearch = (cuisine = "", diet = "", sort = "", sortDirection = "", minCalories = 0, maxCalories = -1, 
  maxFat = 9999, maxCarbs = 9999, ignorePantry = true, fillIngredients = true, limit = 3) => {
  
  const cuisineStr = cuisine === "" ? "" : `cuisine=${cuisine}`;
  const dietStr = diet === "" ? "" : `diet=${diet}`;
  const ignorePantryStr = `ignorePantry=${ignorePantry}`;
  // const includeIngredientsStr = includeIngredients === "" ? "" : `includeIngredients=${includeIngredients}`;
  const fillIngredientsStr = `fillIngredients=${fillIngredients}`;
  const sortStr = sort === "" ? "" : `sort=${sort}`;
  const sortDirectionStr = sortDirection === "" ? "" : `sortDirection=${sortDirection}`;
  const minCaloriesStr = `minCalories=${minCalories}`; 
  const maxCaloriesStr = maxCalories === -1 ? "" : `maxCalories=${maxCalories}`; 
  const maxFatStr = `maxFat=${maxFat}`;
  const maxCarbsStr = `maxCarbs=${maxCarbs}`;
  const limitStr = `number=${limit}`;

  const params = [cuisineStr, dietStr, ignorePantryStr, fillIngredientsStr, sortStr, 
    sortDirectionStr, minCaloriesStr, maxCaloriesStr, maxFatStr, maxCarbsStr, limitStr];
  let queryStr = "";

  for(let i = 0; i < params.length; i++) {
    if(params[i] !== "") {
      queryStr += params[i] + "&";
    }
  }

  // console.log(queryStr);
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?${queryStr}apiKey=${apiKey}`);
};



export const getSimilarRecipes = (id, limit = 5) => {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/similar?number=${limit}&apiKey=${apiKey}`);
};



// Extract recipe from site url and return as object
export const extractRecipe = (url) => {
  return axios.get(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${apiKey}`);
};



