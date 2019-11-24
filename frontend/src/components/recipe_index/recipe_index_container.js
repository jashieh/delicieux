import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';
import { 
  getRandomRecipes,
  getRecipesByIngredients,
  getRecipesByName,
  complexRecipeSearch,
  rotateRecipe,
} from '../../actions/recipe_actions';
import {
  fetchFridge
} from '../../actions/fridge_actions';
import { startLoad, stopLoad } from '../../actions/loading_actions';

const mapStateToProps = (state) => ({
  user: state.session.user,
  recipes: state.entities.recipes,
  fridge: state.entities.fridge,
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch) => ({
  getRecipesByIngredients: (ingredients, limit, ranking, ignorePantry) => dispatch(getRecipesByIngredients(ingredients, limit, ranking, ignorePantry)),
  getRandomRecipes: (num) => dispatch(getRandomRecipes(num)),
  fetchFridge: userId => dispatch(fetchFridge(userId)),
  
  getRecipesByName: (name, limit) => dispatch(getRecipesByName(name, limit)),
  complexRecipeSearch: ({
    search, cuisine, diet, sort, sortDirection,
    minCalories, maxCalories, maxFat, maxCarbs, minProtein,
    ignorePantry, limit
  }) => dispatch(complexRecipeSearch({
    search, cuisine, diet, sort, sortDirection,
    minCalories, maxCalories, maxFat, maxCarbs, minProtein,
    ignorePantry, limit
  })),

  rotateRecipe: (recipe_idx) => dispatch(rotateRecipe(recipe_idx)),
  startLoad: (load) => dispatch(startLoad(load)),
  stopLoad: () => dispatch(stopLoad())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndex)