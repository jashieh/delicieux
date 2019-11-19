import {
  ADD_RECIPE,
  SUBTRACT_RECIPE,
  RECEIVE_CART,
  UPDATE_CART
} from '../actions/cart_actions';

const CART = [
  { recipe_id: 1, number: 1 },
  { recipe_id: 2, number: 2 },
  { recipe_id: 3, number: 3 },
  { recipe_id: 4, number: 4 }
];

const CartReducer = (state = CART, action) => {
  Object.freeze(state);
  let nextState = [];
  for (let i = 0; i < state.length; i++)
    nextState.push(Object.assign({}, state[i]));

  switch (action.type) {
    case ADD_RECIPE:
      for (let i = 0; i < nextState.length; i++)
        if (nextState[i].recipe_id === action.recipe_id) {
          nextState[i].number++;
          return nextState;
        }
      nextState.push({ recipe_id: action.recipe_id, number: 1 }) // NEW ITEM
      return nextState;

    case SUBTRACT_RECIPE:
      for (let i = 0; i < nextState.length; i++)
        if (nextState[i].recipe_id === action.recipe_id)
          nextState[i].number === 1 ? nextState.splice(i, 1) : nextState[i].number--;
      return nextState;

    case UPDATE_CART:
    case RECEIVE_CART:
      return action.cart;

    default:
      return state;
  }
};

export default CartReducer;