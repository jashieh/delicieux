import * as CartAPI from '../util/cart_api_util';

export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const ADD_DATE = "ADD_DATE";
export const SWITCH_DATE = "ADD_DATE";
export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const addRecipe = (date, time, recipe_id) => ({
  type: ADD_RECIPE,
  date,
  time,
  recipe_id,
});

export const removeRecipe = (date, time) => ({
  type: REMOVE_RECIPE,
  date,
  time,
});

export const addDate = date => ({
  type: ADD_DATE,
  date,
});

export const switchDate = date => ({
  type: SWITCH_DATE,
  date,
});

const receiveCart = payload => ({
  type: RECEIVE_CART,
  dates: payload.data.dates
});

const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const getCart = userId => dispatch => (
  CartAPI
    .getCart(userId)
    .then(
      payload => dispatch(receiveCart(payload)),
      errors => dispatch(receiveCartErrors(errors))
    )
);

// Doesn't change state, just updates the backend
// SWAPS OUT THE BACKEND'S OBJECT WITH A NEW OBJECT
export const patchCart = (userId, dates) => dispatch => (
  CartAPI
    .patchCart(userId, dates)
    .then(
      null,
      errors => dispatch(receiveCartErrors(errors)),
    )
);



