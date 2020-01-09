import axios from 'axios';
import key from './key';


// Searches for matches starting with query string. 
// Returns name, id and image of ingredients  


export const searchIngredientByName = (query = "", limit = 5, intolerances=[]) => {
  const allergies = intolerances.join(",")
  // return axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&metaInformation=true&number=${limit}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": key.apiKey
    }, "params": {
      "number": `${limit}`,
      "intolerances": `${allergies}`,
      "query": query,
      "metaInformation": "true"
    }
  })
}

// amount = number of grams
export const getIngredientById = (id, amount = 1, unit = "gram") => {
  // return axios.get(`https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/${id}/information`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": key.apiKey
    }, "params": {
      "amount": `${amount}`,
      "unit": `${unit}`
    }
  })
}



// Returns array of substitutes under key 'substitutes'
export const getIngredientSubstitutes = (ingredientName) => {
  // return axios.get(`https: //api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": key.apiKey
    }, "params": {
      "ingredientName": ingredientName
    }
  })
};

export const getConvertAmounts = (ingredient, sourceUnit, sourceAmount, targetUnit="grams") => {
  const axios = require("axios");

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": key.apiKey
    }, "params": {
      "ingredientName": ingredient,
      "targetUnit": targetUnit,
      "sourceUnit": sourceUnit,
      "sourceAmount": `${sourceAmount}`
    }
  });
};




