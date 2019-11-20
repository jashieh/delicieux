import axios from 'axios';

export const fetchFridge = userId => {
  return axios.get(`/api/fridge/${userId}`);
};

export const addIngredientToFridge = (userId, ingredient) => {
  return axios.post(`/api/fridge/${userId}/add`);
};