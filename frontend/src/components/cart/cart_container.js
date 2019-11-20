import { connect } from 'react-redux';

import Cart from './cart';
import { getCart, patchCart } from '../../actions/cart_actions';
import '../stylesheets/cart/cart.scss';

const mapStateToProps = state => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  userId: state.session.user.id,
});

const mapDispatchToProps = dispatch => ({
  getCart: (userId) => dispatch(getCart(userId)),
  patchCart: (userId, cartItems) => dispatch(patchCart(userId, cartItems)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);