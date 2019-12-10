import axios from 'axios';

import { getRecipeById } from './recipe_api_util';
import { getConvertAmounts } from './ingredient_api_util';

export const fetchFridge = (userId) => {
  return axios.get(`/api/fridge/${userId}`);
};


// ingredient object format: 
// ingredient: { ingredientId: 1, ingredientName: "chicken", amount: 50 }
export const addFridgeIngredient = (userId, ingredient, amount) => {
  let item = ingredient;
  item['amount'] = amount;
  return axios.patch(`/api/fridge/${userId}/addNewIngredient`, item);
};

// Amount can be negative or positive
// ingredient: { id: 1, name: "chicken", image: "url", aisle: "meat", amount: 50 }
export const modifyIngredient = (userId, ingredient, amount) => {
  let item = Object.assign({},ingredient);
  item.amount = amount;
  return axios.patch(`/api/fridge/${userId}/modifyIngredient`, item);
};


// Could receive entire recipe object from state instead
export const modifyFridge = (userId, recipe, makeItem = true) => {
  let ingredients = {};
  let requests = 0;
  debugger;
  // recipe.extendedIngredients
  // getRecipeById(recipeId).then((res) => {
    const list = recipe.ingredients.map(ingredient => Object.assign({}, ingredient));
    for (let i = 0; i < list.length; i++) {
      requests++;
      let ingredient = list[i];
      getConvertAmounts(ingredient.name, ingredient.unit, ingredient.amount)
        .then(res => {
          requests--;
          ingredient.amount = makeItem ? -res.data.targetAmount : res.data.targetAmount;
          ingredient.unit = "grams";
          ingredients[ingredient.id] = ingredient;
          
          if(requests === 0) {
            return axios.patch(`/api/fridge/${userId}/modifyFridge`, ingredients);
          }
      });
    }
  // })
};