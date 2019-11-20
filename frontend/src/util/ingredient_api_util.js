import axios from 'axios';

const apiKey = "be025cdd9bmsh49601abc3099f49p1c31fdjsn618acb311b0a";

// Searches for matches starting with query string. 
// Returns name, id and image of ingredients  
export const searchIngredientByName = (query = "", limit = 5, intolerances) => {
  const allergies = intolerances.join(",")
  // return axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&metaInformation=true&number=${limit}&apiKey=${apiKey}`);
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, "params": {
      "number": `${limit}`,
      "intolerances": `${allergies}`,
      "query": query,
      "metaInformation": "true"
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
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
      "x-rapidapi-key": "f9ba977a04msha79dcdbd3b845c1p1e804ajsn0a5620f33ad5"
    }, "params": {
      "amount": `${amount}`,
      "unit": `${unit}`
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
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
      "x-rapidapi-key": "f9ba977a04msha79dcdbd3b845c1p1e804ajsn0a5620f33ad5"
    }, "params": {
      "ingredientName": ingredientName
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
};