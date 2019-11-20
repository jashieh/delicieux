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
  searchIngredientByName,
  getIngredientById,
} from './util/ingredient_api_util';

import { fetchFridge, addIngredientToFridge } from './util/fridge_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    
    const preloadedState = {
      session: { isAuthenticated: true, user: decoded }
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
  window.addIngredientToFridge = addIngredientToFridge;
  window.getIngredientById = getIngredientById;
  window.getState = store.getState;
  
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});



