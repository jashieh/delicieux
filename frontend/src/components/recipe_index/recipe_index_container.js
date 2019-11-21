import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';
import { getRandomRecipes,rotateRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state) => ({
  recipes: state.entities.recipes,
  // filters: state.filters.recipes
});

const mapDispatchToProps = (dispatch) => ({
  getRandomRecipes: (number) => dispatch(getRandomRecipes(number)),
  rotateRecipe: (recipe_idx) => dispatch(rotateRecipe(recipe_idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndex)