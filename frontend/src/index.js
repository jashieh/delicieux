import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import { 
  getRandomRecipe, 
  // getRandomRecipes, 
  extractRecipe,
  getSimilarRecipes,
  getRecipeById,
  getRecipesByIngredients,
  searchRecipeByName,
  complexRecipeSearch,
  getRecipe,
  postRecipeId,
  postRecipeComplex,
  patchRecipeImage,
} from './util/recipe_api_util';

import {
  getRandomRecipes,
} from './actions/recipe_actions';

import {
  getCart,
  addCartDate,
  addCartMeal,
  removeCartMeal,
} from './actions/cart_actions';

import {
  searchIngredientByName,
  getIngredientById,
  getConvertAmounts
} from './util/ingredient_api_util';

import {
  signup
} from './util/session_api_util'

import { modifyFridge } from './util/fridge_api_util';

import { fetchFridge, addFridgeIngredient, modifyIngredient } from './actions/fridge_actions';

import { calorieCalc } from './util/calorie_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    
    const preloadedState = {
      session: { 
        isAuthenticated: true, 
        user: decoded, 
        currentDate: Date().toString().slice(0, 15) 
      },
      entities: {
        fridge: {
          ingredients: {},
        },
      },
    };
    
    store = configureStore(preloadedState);
    // const currentTime = Date.now() / 1000;
    
    // if (decoded.exp < currentTime) {
    //   store.dispatch(logout());
    //   window.location.href = '/login';
    // }
  } else {
    store = configureStore();
  }
  
  window.getRandomRecipe = getRandomRecipe;
  window.getRandomRecipes = getRandomRecipes;
  window.getRecipesByIngredients = getRecipesByIngredients;
  window.extractRecipe = extractRecipe;
  window.getRecipeById = getRecipeById;
  window.searchRecipeByName = searchRecipeByName;
  window.getSimilarRecipes = getSimilarRecipes;
  window.complexRecipeSearch = complexRecipeSearch;
  window.searchIngredientByName = searchIngredientByName;
  window.fetchFridge = fetchFridge;
  window.addFridgeIngredient = addFridgeIngredient;
  window.getIngredientById = getIngredientById;
  window.modifyIngredient = modifyIngredient;
  window.modifyFridge = modifyFridge;
  window.getState = store.getState;
  window.getConvertAmounts = getConvertAmounts;
  window.dispatch = store.dispatch;

  window.getCart = getCart;
  window.addCartDate = addCartDate;
  window.addCartMeal = addCartMeal;
  window.removeCartMeal = removeCartMeal;

  window.getRecipe = getRecipe;
  window.postRecipeId = postRecipeId;
  window.postRecipeComplex = postRecipeComplex;
  window.patchRecipeImage = patchRecipeImage;
  window.calorieCalc = calorieCalc;
  window.logout = logout;

  window.signup = signup;
  
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});



