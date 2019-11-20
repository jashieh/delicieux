import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import { getRandomRecipe, 
  extractRecipe,
  getSimilarRecipes,
  getRecipeById,
  getRecipesByIngredients,
  searchRecipeByName,
  complexRecipeSearch
} from './util/recipe_api_util';

import {
  getCart,
  addCartDate,
  addCartMeal,
  removeCartMeal,
} from './actions/cart_actions';

import {
  searchIngredientByName,
  getIngredientById,
} from './util/ingredient_api_util';

// import { fetchFridge, addFridgeIngredient, modifyIngredient } from './util/fridge_api_util';

import { fetchFridge, addFridgeIngredient } from './actions/fridge_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    
    const preloadedState = {
      session: { isAuthenticated: true, user: decoded, currentDate: Date().toString().slice(0, 15) }
    };
    
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore();
  }
  
  window.getRandomRecipe = getRandomRecipe;
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
  // window.modifyIngredient = modifyIngredient;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.getCart = getCart;
  window.addCartDate = addCartDate;
  window.addCartMeal = addCartMeal;
  window.removeCartMeal = removeCartMeal;
  
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});



