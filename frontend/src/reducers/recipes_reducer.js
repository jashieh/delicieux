import {
  RECEIVE_RECIPES,
  ROTATE_RECIPE,
} from '../actions/recipe_actions';

const RECIPES = [
  {
    id: 1,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 1"
  },
  {
    id: 2,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 2"
  },
  {
    id: 3,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 3"
  },
  {
    id: 4,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 4"
  },
  {
    id: 1,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 5"
  },
  {
    id: 2,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 6"
  },
  {
    id: 3,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 7"
  },
  {
    id: 4,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 8"
  },
  {
    id: 6,
    image: "https://spoonacular.com/recipeImages/530550-556x370.jpg",
    title: "Avocado Cream Pasta Sauce Recipe 9"
  },
];

const RecipesReducer = (state = RECIPES, action) => {
  Object.freeze(state);
  let nextState = [];
  let temp;

  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case ROTATE_RECIPE:
      for (let i = 0; i < state.length; i++) 
        nextState.push(Object.assign({}, state[i]));
      temp = nextState.splice(action.recipe_idx, 1);
      nextState.push(temp[0]);
      return nextState;
    default:
      return state;
  }
};

export default RecipesReducer;