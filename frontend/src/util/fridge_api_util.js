import axios from 'axios';

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
// export const modifyIngredient = (userId, ingredientId, amount) => {
//   return axios.patch(`/api/fridge/${userId}/modifyIngredient`, {ingredientId, amount});
// };

// ingredient: { id: 1, name: "chicken", image: "url", aisle: "meat", amount: 50 }
export const modifyIngredient = (userId, ingredient, amount) => {
  let item = ingredient;
  item.amount = amount;
  return axios.patch(`/api/fridge/${userId}/modifyIngredient`, item);
};