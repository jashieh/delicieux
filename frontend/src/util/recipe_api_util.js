import axios from 'axios';


const apiKey = "be025cdd9bmsh49601abc3099f49p1c31fdjsn618acb311b0a";


export const getRandomRecipe = (number = 1, tags) => {
  if (!tags) tags = [];
  let tagStr = tags.join(",");
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "number": `${number}`,
      "tags": tagStr
    }
  })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  //res.data
};

export const getRandomRecipes = (number) => {
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "number": `${number}`,
      "tags": "vegetarian%2Cdessert"
    }
  })
};

export const getRecipeById = (id, includeNutrition = true) => {
  // return axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "includeNutrition": `${includeNutrition}`
    }
  })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  //res.data
};

// Input ids as an array
export const getMultipleRecipes = (ids, includeNutrition = true) => {
  const idString = ids.join(',');
  // return axios.get(`https://api.spoonacular.com/recipes/informationBulk?${idString}&apiKey=${apiKey}`);

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "ids": idString,
      "includeNutrition": `${includeNutrition}`
    }
  })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
};

// Ingredients as array. Ranking 1 means maximize used ingredients and ranking 2 means minimize missed ingredients
export const getRecipesByIngredients = (ingredients, limit = 5, ranking = 1, ignorePantry = true) => {
  const query = ingredients.join(',');
  // return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${limit}&apiKey=${apiKey}`);

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "number": `${limit}`,
      "ranking": `${ranking}`,
      "ignorePantry": `${ignorePantry}`,
      "ingredients": `${query}`
    }
  })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};


// Search for recipe by name.  Returns title and id of recipe. Will return anything that starts with query string.
export const searchRecipeByName = (name, limit = 5) => {
  // return axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${name}&number=${limit}&apiKey=${apiKey}`);

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "number": `${limit}`,
      "query": name
    }
  })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};


// cuisine: array => [italian, korean, american, chinese, etc.] as lowercase
// diet: array => ["vegetarian", "ketogenic", "gluten free"]
// includeIngredients: array => [tomato, cheese, noodles]
// sort: string => calories, cholesterol, carbohydrates
// sortDirection: asc/desc 
// maxCalories/minCalories: int 
// maxFat/maxCarbs: int
// ignorePantry: true/false
// fillIngredients: true/false

// TAKES IN AN OPTIONS HASH
export const complexRecipeSearch = (
  {search, cuisine, diet, sort, sortDirection, 
  minCalories, maxCalories, maxFat, maxCarbs, minProtein, 
  ignorePantry, limit}) => {

  if (!search) search = "";
  if (!cuisine) cuisine = [];
  if (!diet) diet = [];
  if (!sort) sort = "";
  if (!sortDirection) sortDirection = "asc";

  if (!minCalories) minCalories = 0;
  if (!maxCalories) maxCalories = 9999;
  if (!maxFat) maxFat = 9999;
  if (!maxCarbs) maxCarbs = 9999;
  if (!minProtein) minProtein = 0;

  if (!ignorePantry) ignorePantry = true;
  if (!limit) limit = 10;

  const cuisineStr = cuisine.join(",");
  const dietStr = diet.join(",");

  // console.log(queryStr);
  // return axios.get(`https://api.spoonacular.com/recipes/complexSearch?${queryStr}apiKey=${apiKey}`);

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "query": search,
      "cuisine": `${cuisineStr}`,
      "diet": `${dietStr}`,
      "sort": `${sort}`,
      "sortDirection": `${sortDirection}`,
      "minCalories": `${minCalories}`,
      "maxCalories": `${maxCalories}`,
      "maxFat": `${maxFat}`,
      "maxCarbs": `${maxCarbs}`,
      "minProtein": `${minProtein}`,
      "ignorePantry": `${ignorePantry}`,
      "number": `${limit}`,
      "addRecipeInformation": "true",
      "fillIngredients": "true"
    }
  })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};



export const getSimilarRecipes = (id, limit = 5) => {
  // return axios.get(`https://api.spoonacular.com/recipes/${id}/similar?number=${limit}&apiKey=${apiKey}`);
  axios({
    "method": "GET",
    "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/similar`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    },
    "params": {
      "numer": `${limit}`
    },
  })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};



// Extract recipe from site url and return as object
export const extractRecipe = (url) => {
  // return axios.get(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, "params": {
      "url": url
    }
  })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};

export const getRecipe = (recipeId) => {
  return axios.get(`/api/recipes/${recipeId}`);
};

export const postRecipeId = (recipeData) => {
  return axios.post('/api/recipes/indiv', recipeData);
};

export const postRecipeComplex = (recipeData) => {
  return axios.post('/api/recipes/item', recipeData);
};

export const patchRecipeImage = (recipeId, recipeData) => {
  return axios.patch(`/api/recipes/${recipeId}/picture`, recipeData);
};