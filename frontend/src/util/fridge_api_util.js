import axios from 'axios';

// export const fetchFridge = userId => {
//   return axios.get(`/api/fridge/${userId}`);
// };

export const fetchFridge = (userId) => {
  return axios.get(`/api/fridge/${userId}`);
};

export const addIngredientToFridge = (userId, ingredient) => {
  return axios.patch(`/api/fridge/${userId}/add`, ingredient);
};