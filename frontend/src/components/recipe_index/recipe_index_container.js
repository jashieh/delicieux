import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';
import { 
  getRandomRecipe,
  getRandomRecipes,
  getRecipesByIngredients,
  rotateRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state) => ({
  recipes: state.entities.recipes,
  // filters: state.filters.recipes
});

const mapDispatchToProps = (dispatch) => ({
  getRandomRecipe: () => dispatch(getRandomRecipe()),
  getRandomRecipes: (number) => dispatch(getRandomRecipes(number)),
  getRecipesByIngredients: (ingredients, limit, ranking, ignorePantry) => dispatch(getRecipesByIngredients(ingredients, limit, ranking, ignorePantry)),

  rotateRecipe: (recipe_idx) => dispatch(rotateRecipe(recipe_idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndex)