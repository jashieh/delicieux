import axios from 'axios';

export const getCart = userId => {
  return axios.get(`/api/carts/${userId}`);
};

export const postCart = userId => {
  return axios.post(`/api/carts/${userId}`);
};

export const patchCart = (cartId, cartData) => {
  return axios.patch(`/api/carts/${cartId}`, cartData);
};