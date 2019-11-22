import * as RecipeAPI from '../util/recipe_api_util';
import { recipeArrayToObject } from "../selectors/selectors";

export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const ROTATE_RECIPE = "ROTATE_RECIPE";

// receives an aray of recipes
const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes: recipeArrayToObject(recipes),
});

// receives a single recipe
const receiveRecipe = (recipe) => {debugger; return {
  type: RECEIVE_RECIPE,
  recipe,
}};

const receiveRecipeErrors = (errors) => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors,
});

export const rotateRecipe = recipe_idx => ({
  type: ROTATE_RECIPE,
  recipe_idx,
});

export const getRecipeDB = (recipeId) => dispatch => (
  RecipeAPI
    .getRecipe(recipeId)
    .then(
      ({data}) =>  {debugger; dispatch(receiveRecipe(data))},
      errors => dispatch(receiveRecipeErrors(errors))
    )
)

const getRecipeById = (recipeId) => dispatch => (
  RecipeAPI
    .getRecipeById(recipeId)
    .then(
      ({ data }) => {
        RecipeAPI
          .postRecipeId(data)
          .catch(() => console.log("already there"));
        dispatch(receiveRecipes([data]));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

const getMultipleRecipes = (recipeIds) => dispatch => (
  RecipeAPI
    .getMultipleRecipes(recipeIds)
    .then(
      ({ data }) => {
        for (let i = 0; i < data.length; i++)
          RecipeAPI
            .postRecipeId(data[i])
            .catch(() => console.log("already there"));
        dispatch(receiveRecipes(data));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

export const getRandomRecipe = () => dispatch => (
  RecipeAPI
    .getRandomRecipe()
    .then(
      ({ data }) => {
        let recipeId = data.recipes[0].id;
        dispatch(getRecipeById(recipeId));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

// Nested structure handles the issue of returned recipes not having
// defailed nutrition information.
export const getRandomRecipes = (number) => dispatch => (
  RecipeAPI
    .getRandomRecipes(number)
    .then(
      ({ data }) => {
        let recipeIds = data.recipes.map(recipe => recipe.id);
        dispatch(getMultipleRecipes(recipeIds));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

export const getRecipesByIngredients = (ingredients, limit = 5, ranking = 2, ignorePantry = true) => dispatch => (
  RecipeAPI
    .getRecipesByIngredients(ingredients, limit, ranking, ignorePantry)
    .then(
      ({ data }) => {
        let recipeIds = data.map(recipe => recipe.id);
        dispatch(getMultipleRecipes(recipeIds));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

export const getRecipesByName = (name, limit = 5) => dispatch => (
  RecipeAPI
    .searchRecipeByName(name, limit)
    .then(
      ({ data }) => {
        let recipeIds = data.map(recipe => recipe.id);
        dispatch(getMultipleRecipes(recipeIds));
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);


export const complexRecipeSearch = (
  search="",
  cuisine = "", diet = "", sort = "", sortDirection = "", 
  minCalories = 0, maxCalories = 9999, maxFat = 9999, maxCarbs = 9999, minProtein = 0, 
  ignorePantry = true, fillIngredients = true, limit = 3
) => dispatch => {
  debugger;
  RecipeAPI
    .complexRecipeSearch(
      search, cuisine, diet, sort, sortDirection, 
      minCalories, maxCalories, maxFat, maxCarbs, minProtein,
      ignorePantry, fillIngredients, limit
    )
    .then(
      ({data}) => {
        for (let i = 0; i < data.results.length; i++)
          RecipeAPI
            .postRecipeComplex(data.results[i]);
        dispatch(receiveRecipes(data.results))
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
};

export const searchRecipeByName = (name, limit = 5) => dispatch => (
  RecipeAPI
    .searchRecipeByName(name, limit)
  // .then(
  //   ({ data }) = dispatch(receiveRecipeNames([ data ])), // an action for pulling in search data so you can search a recipe by name and get the show page
  //   errors => dispatch(receiveRecipeErrors(errors))
  // )
);