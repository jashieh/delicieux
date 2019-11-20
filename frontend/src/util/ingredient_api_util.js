import axios from 'axios';

const apiKey = '74796f8377434d6a9de79e615fb0d2c1';

// Searches for matches starting with query string. 
// Returns name, id and image of ingredients  
export const searchIngredientByName = (query = "", limit = 5) => {
  return axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&metaInformation=true&number=${limit}&apiKey=${apiKey}`);
}

// amount = number of grams
export const getIngredientById = (id, amount = 1, unit = "grams") => {
  return axios.get(`https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`);
}


// Returns array of substitutes under key 'substitutes'
export const getIngredientSubstitutes = (ingredientName) => {
  return axios.get(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${apiKey}`);
};