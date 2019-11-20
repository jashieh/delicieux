import axios from 'axios';

export const getCart = userId => {
  return axios.get(`/api/carts/${userId}`);
};

// dateInfo = { date: ... }
export const addCartDate = (cartId, dateInfo) => {
  return axios.patch(`/api/carts/${cartId}/addDate/`, dateInfo);
};

// mealInfo = { date: ..., time: ..., recipeId: ... }
export const setCartMeal = (cartId, mealInfo) => {
  return axios.patch(`/api/carts/${cartId}/addMeal/`, mealInfo);
};