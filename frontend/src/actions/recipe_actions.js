import * as RecipeAPI from '../util/recipe_api_util';
import { recipeArrayToObject } from "../selectors/selectors";
import { stopLoad } from './loading_actions';
import { getIngredientById } from '../util/ingredient_api_util';

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
const receiveRecipe = (recipe) => ({
  type: RECEIVE_RECIPE,
  recipe,
});

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
      ({data}) =>  dispatch(receiveRecipe(data)),
      errors => dispatch(receiveRecipeErrors(errors))
    )
)

export const getRecipeById = (recipeId) => dispatch => (
  RecipeAPI
    .getRecipeById(recipeId)
    .then(
      ({ data }) => {
        let apiData = data;
        RecipeAPI
          .getRecipe(apiData.id)
          .then(({ data }) => {
            apiData = data;
            dispatch(receiveRecipes([data]));
          })
          .catch(() => {
            RecipeAPI.postRecipeId(apiData)
              .then(({data}) => {
                apiData = data;
                dispatch(receiveRecipes([apiData]));
              });
          });
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
);

const getMultipleRecipes = (recipeIds) => dispatch => (
  RecipeAPI
    .getMultipleRecipes(recipeIds)
    .then(
      ({ data }) => {
        let apiData = data;
        let results = 0;
        let updateDone = 0;
        
        for (let i = 0; i < apiData.length; i++) {
          results++;
          RecipeAPI
            .getRecipe(apiData[i].id)
            .then(({data}) => {
              results--;
              apiData[i] = data;
              // from db
              // if (results === 0) dispatch(receiveRecipes(apiData))
              //   .then( ()=> dispatch(stopLoad()));    
              if (results === 0){
                dispatch(receiveRecipes(apiData))
                dispatch(stopLoad());    
              } 

            })
            .catch(() => {
              let newRecipes = {};
              updateDone++;
              RecipeAPI.postRecipeId(apiData[i])
                .then((payload) => {
                  results--;
                  apiData[i] = payload.data;
                  // from api
                  let ing = payload.data.ingredients;
                  let count = 0;
                  for(let j = 0; j < ing.length; j++) {
                    if(!ing[j].id) {
                      // updateDone--;
                      continue;
                    }
                    count++;
                    getIngredientById(ing[j].id).then(res => {
                      count--;
                      ing[j].aisle = res.data.aisle;
                      if(count === 0) {
                        RecipeAPI.updateRecipeIngredients(payload.data.recipeId, ing)
                        .then(res => {
                          updateDone--;
                          apiData[i] = res.data;

                          if(updateDone === 0) {
                            dispatch(receiveRecipes(apiData))
                          }
                        });
                      }
                    });
                  }
                  if (results === 0){
                    dispatch(receiveRecipes(apiData))
                    dispatch(stopLoad());
                  } 
                });
            });
          }
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
export const getRandomRecipes = number => dispatch =>
         RecipeAPI.getRandomRecipes(number)
           .then(
             ({ data }) => {
               let recipeIds = data.recipes.map(recipe => recipe.id);
               dispatch(getMultipleRecipes(recipeIds));
             },
             errors => dispatch(receiveRecipeErrors(errors))
           );

export const getRecipesByIngredients = (ingredients, limit, ranking, ignorePantry) => dispatch => (
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

// TAKES AN OPTIONS HASH
export const complexRecipeSearch = ({
  search, cuisine, diet, intolerances, sort, sortDirection, 
  minCalories, maxCalories, maxFat, maxCarbs, minProtein, 
  ignorePantry, limit
}) => dispatch => {
  RecipeAPI
    .complexRecipeSearch({
      search, cuisine, diet, intolerances, sort, sortDirection, 
      minCalories, maxCalories, maxFat, maxCarbs, minProtein,
      ignorePantry, limit
    })
    .then(
      ({data}) => {
        let apiData = data.results;
        let results = 0;
        for (let i = 0; i < apiData.length; i++) {
          results++;
          RecipeAPI
            .getRecipe(apiData[i].id)
            .then(({ data }) => {
              results--;
              apiData[i] = data;
              if (results === 0) {
                dispatch(receiveRecipes(apiData))
                dispatch(stopLoad())
              }   
            })
            .catch(() => {
              RecipeAPI.postRecipeComplex(apiData[i])
                .then(({data}) => {
                  results--;
                  apiData[i] = data;
                  if (results === 0) {
                    dispatch(receiveRecipes(apiData));
                    dispatch(stopLoad())  
                  }
              });
            });
          }
      },
      errors => dispatch(receiveRecipeErrors(errors))
    )
    .catch(err => {});
};

export const searchRecipeByName = (name, limit = 5) => dispatch => (
  RecipeAPI
    .searchRecipeByName(name, limit)
  // .then(
  //   ({ data }) = dispatch(receiveRecipeNames([ data ])), // an action for pulling in search data so you can search a recipe by name and get the show page
  //   errors => dispatch(receiveRecipeErrors(errors))
  // )
);