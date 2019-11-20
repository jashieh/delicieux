import { connect } from 'react-redux';

import CartItem from './cart_item';
import { addRecipe, subtractRecipe, removeRecipe } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  cart_item: ownProps.cart_item,
});

const mapDispatchToProps = dispatch => ({
  addRecipe: (recipe_id) => dispatch(addRecipe(recipe_id)),
  subtractRecipe: (recipe_id) => dispatch(subtractRecipe(recipe_id)),
  removeRecipe: (recipe_id) => dispatch(removeRecipe(recipe_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);