import * as RecipeAPI from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const ROTATE_RECIPE = "ROTATE_RECIPE";

const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes,
});

const receiveRecipeErrors = (errors) => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors,
});

export const rotateRecipe = recipe_idx => ({
  type: ROTATE_RECIPE,
  recipe_idx,
});

export const getRandomRecipe = () => dispatch => (
  RecipeAPI
    .getRandomRecipe()
    .then(
      recipes => dispatch(receiveRecipes(recipes)),
      errors => dispatch(receiveRecipeErrors(errors))
    )
)

export const getRandomRecipes = (number) => dispatch => (
  RecipeAPI
    .getRandomRecipes(number)
    .then(
      ({data}) => {
        let recipeIds = data.recipes.map(recipe => recipe.id);
        RecipeAPI
          .getMultipleRecipes(recipeIds)
          .then(
            ({data}) => dispatch(receiveRecipes(data)),
            (errors) => dispatch(receiveRecipeErrors(errors))
          )
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
)