

export const RECEIVE_RECIPE = "RECEIVE_RECIPE";

const receiveRecipe = (recipe) => ({
  type: RECEIVE_RECIPE,
  recipe,
});