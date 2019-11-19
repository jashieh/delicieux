import * as CartAPI from '../util/cart_api_util';

export const ADD_RECIPE = "ADD_RECIPE";
export const SUBTRACT_RECIPE = "SUBTRACT_RECIPE";
export const RECEIVE_CART = "RECEIVE_CART";
export const UPDATE_CART = "UPDATE_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const addRecipe = (recipe_id) => ({
  type: ADD_RECIPE,
  recipe_id,
});

export const subtractRecipe = recipe_id => ({
  type: SUBTRACT_RECIPE,
  recipe_id
});

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const getCart = user_id => dispatch => (
  CartAPI
    .getCart(user_id)
    .then(
      cart => dispatch(receiveCart(cart)),
      errors => dispatch(receiveCartErrors(errors))
    )
);

// Doesn't change state, just updates the backend
export const updateCart = (user_id, cart) => dispatch => (
  CartAPI
    .updateCart(user_id, cart)
    .then(
      null,
      errors => dispatch(receiveCartErrors(errors)),
    )
);



