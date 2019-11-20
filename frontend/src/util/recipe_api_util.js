import axios from 'axios';

const apiKey = "be025cdd9bmsh49601abc3099f49p1c31fdjsn618acb311b0a";

export const getRandomRecipe = () => {
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, 
    "params": {
      "number": "1",
      "tags": "vegetarian%2Cdessert"
    }
  }).then(res => console.log(res))
    .catch(err => console.log(err))
  //res.data
};

export const getRecipeById = (id, includeNutrition = false) => {
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
  }).then(res => console.log(res))
    .catch(err => console.log(err))
  //res.data
};

// Input ids as an array
export const getMultipleRecipes = (ids) => {
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
      "ids": idString
    }
  }).then(res => console.log(res))
    .catch(err => console.log(err))
};

// Ingredients as array. Ranking 1 means maximize used ingredients and ranking 2 means minimize missed ingredients
export const getRecipesByIngredients = (ingredients, limit = 5, ranking = 2, ignorePantry = true) => {
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
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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

export const complexRecipeSearch = (search, cuisine = "", diet = "", sort = "", sortDirection = "", minCalories = 0, maxCalories = -1, 
  maxFat = 9999, maxCarbs = 9999, minProtein = 0, ignorePantry = true, fillIngredients = true, limit = 3) => {
  
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
      "cuisine": `${cuisine}`,
      "diet": `${diet}`,
      "ignorePantry": `${ignorePantry}`,
      "minCalories": `${minCalories}`,
      "maxCalories": `${maxCalories}`,
      "maxFat": `${maxFat}`,
      "maxCarbs": `${maxCarbs}`,
      "minProtein": `${minProtein}`,
      "number": `${limit}`,
      "sort": `${sort}`,
      "query": search,
      "addRecipeInformation": "true",
      "fillIngredients": `${fillIngredients}`

    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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
      "x-rapidapi-key": "f9ba977a04msha79dcdbd3b845c1p1e804ajsn0a5620f33ad5"
    }, "params": {
      "url": url
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
};



