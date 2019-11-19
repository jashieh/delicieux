import { connect } from 'react-redux';

import RecipeIndexItem from './recipe_index_item';
import { addRecipe, subtractRecipe } from '../../actions/cart_actions'
import { rotateRecipe } from '../../actions/recipe_actions'

const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  cart: state.entities.cart,
  removeItem: ownProps.removeItem
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe_id) => dispatch(addRecipe(recipe_id)),
  subtractRecipe: (recipe_id) => dispatch(subtractRecipe(recipe_id)),
  rotateRecipe: (recipe_idx) => dispatch(rotateRecipe(recipe_idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndexItem)