

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes,
});