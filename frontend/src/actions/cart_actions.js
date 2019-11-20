import * as CartAPI from '../util/cart_api_util';

export const ADD_RECIPE = "ADD_RECIPE";
export const SUBTRACT_RECIPE = "SUBTRACT_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const addRecipe = (recipe_id) => ({
  type: ADD_RECIPE,
  recipe_id,
});

export const subtractRecipe = recipe_id => ({
  type: SUBTRACT_RECIPE,
  recipe_id,
});

export const removeRecipe = recipe_id => ({
  type: REMOVE_RECIPE,
  recipe_id,
})

const receiveCart = payload => ({
  type: RECEIVE_CART,
  cart: payload.data.items
});

const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const getCart = user_id => dispatch => (
  CartAPI
    .getCart(user_id)
    .then(
      payload => dispatch(receiveCart(payload)),
      errors => dispatch(receiveCartErrors(errors))
    )
);

// Doesn't change state, just updates the backend
export const patchCart = (user_id, cartItems) => dispatch => (
  CartAPI
    .patchCart(user_id, cartItems)
    .then(
      null,
      errors => dispatch(receiveCartErrors(errors)),
    )
);



