import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  ADD_DATE,
  RECEIVE_CART,
} from '../actions/cart_actions';

const CART = {
  "Wed Nov 18 2019": {
    "BREAKFAST": 1,
    "LUNCH": 1,
    "DINNER": undefined
  },
  "Tue Nov 19 2019": {
    "BREAKFAST": 2,
    "LUNCH": 2,
    "DINNER": undefined
  },
  "Wed Nov 20 2019": {
    "BREAKFAST": 3,
    "LUNCH": 3,
    "DINNER": undefined
  },
  "Thurs Nov 21 2019": {
    "BREAKFAST": 4,
    "LUNCH": 4,
    "DINNER": undefined
  },
};

const CartReducer = (state = CART, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case ADD_RECIPE:
      nextState.dates[action.date][action.time] = action.recipeId;
      return nextState;

    case REMOVE_RECIPE:
      nextState.dates[action.date][action.time] = undefined;
      return nextState;

    case ADD_DATE:
      if (nextState[action.date]) return nextState;
      nextState[action.date] = { 
        "BREAKFAST": undefined, 
        "LUNCH": undefined,
        "DINNER": undefined,
      };
      return nextState;

    case RECEIVE_CART:
      return action.cart;

    default:
      return state;
  }
};

export default CartReducer;