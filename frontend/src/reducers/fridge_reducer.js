import {
  RECEIVE_FRIDGE,
  RECEIVE_FRIDGE_INGREDIENT,
  REMOVE_FRIDGE_INGREDIENT
} from '../actions/fridge_actions';

const FridgeReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState;

  switch (action.type) {
    case RECEIVE_FRIDGE:
      return Object.assign({}, action.fridge);
    case RECEIVE_FRIDGE_INGREDIENT:
      nextState = Object.assign({}, state);
      nextState.ingredients[action.ingredient.id] = action.ingredient;
      return nextState;
    case REMOVE_FRIDGE_INGREDIENT:
      nextState = Object.assign({}, state);
      delete nextState.ingredients[action.id];
      return nextState;
    default:
      return state;
  }
};

export default FridgeReducer;