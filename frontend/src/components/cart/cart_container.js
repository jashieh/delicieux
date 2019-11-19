import { connect } from 'react-redux';

import Cart from './cart';
import { getCart, updateCart, addRecipe, subtractRecipe } from '../../actions/cart_actions';

const mapStateToProps = state => ({
  cart: state.entities.cart,
  user_id: state.session.user_id,
});

const mapDispatchToProps = dispatch => ({
  getCart: (user_id) => dispatch(getCart(user_id)),
  updateCart: (user_id, cart) => dispatch(updateCart(user_id, cart)),
  addRecipe: (recipe_id) => dispatch(addRecipe(recipe_id)),
  subtractRecipe: (recipe_id) => dispatch(subtractRecipe(recipe_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);