import {
  ADD_RECIPE,
  REMOVE_RECIPE
} from '../actions/cart_actions';

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let { recipe_id } = action.recipe;

  switch (action.type) {
    case ADD_RECIPE:
      nextState[recipe_id] ? nextState[recipe_id]++ : nextState[recipe_id] = 1
      return nextState;
    case REMOVE_RECIPE:
      if (nextState[recipe_id])
      return nextState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;