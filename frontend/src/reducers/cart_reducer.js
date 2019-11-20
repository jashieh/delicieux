import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  RECEIVE_CART,
  ADD_DATE,
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
      nextState[action.date][action.time] = action.recipe_id;
      return nextState;

    case REMOVE_RECIPE:
      nextState[action.date][action.time] = undefined;
      return nextState;

    case ADD_DATE:
      if (nextState[action.date]) return nextState;
      nextState[action.date] = [undefined, undefined, undefined];
      return nextState;

    case RECEIVE_CART:
      return action.dates;

    default:
      return state;
  }
};

export default CartReducer;