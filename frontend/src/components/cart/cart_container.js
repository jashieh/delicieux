import { connect } from 'react-redux';

import Cart from './cart';
import { getCart, patchCart } from '../../actions/cart_actions';
import '../stylesheets/cart/cart.scss';

const mapStateToProps = state => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  user_id: state.session.user_id,
});

const mapDispatchToProps = dispatch => ({
  getCart: (user_id) => dispatch(getCart(user_id)),
  patchCart: (user_id, cart) => dispatch(patchCart(user_id, cart)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);