import {
  RECEIVE_FRIDGE,
  RECEIVE_FRIDGE_INGREDIENT
} from '../actions/fridge_actions';

const FridgeReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FRIDGE:
      return Object.assign({}, action.fridge);
    case RECEIVE_FRIDGE_INGREDIENT:
      let nextState = Object.assign({}, state);
      nextstate[action.ingredient.ingredientId] = action.ingredient;
      return nextState;
    default:
      return state;
  }
};

export default FridgeReducer;