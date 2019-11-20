import axios from 'axios';

export const fetchFridge = (userId) => {
  return axios.get(`/api/fridge/${userId}`);
};

export const addFridgeIngredient = (userId, ingredient) => {
  return axios.patch(`/api/fridge/${userId}/addNewIngredient`, ingredient);
};

// Amount can be negative or positive
export const modifyIngredient = (userId, ingredientId, amount) => {
  return axios.patch(`/api/fridge/${userId}/modifyIngredient`, {ingredientId, amount});
};