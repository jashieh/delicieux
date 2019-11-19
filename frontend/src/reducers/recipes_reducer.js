import {
  RECEIVE_RECIPES,
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    default:
      return state;
  }
};

export default RecipesReducer;