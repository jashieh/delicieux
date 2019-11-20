import { connect } from 'react-redux';

import Cart from './cart';
import { getCart, patchCart, switchDate, addDate } from '../../actions/cart_actions';
import '../stylesheets/cart/cart.scss';

const mapStateToProps = state => ({
  recipes: state.entities.recipes,
  dates: state.entities.cart,

  userId: state.session.user.id,
  currentDate: state.session.currentDate,
});

const mapDispatchToProps = dispatch => ({
  getCart: (userId) => dispatch(getCart(userId)),
  patchCart: (userId, cartItems) => dispatch(patchCart(userId, cartItems)),

  switchDate: (date) => dispatch(switchDate(date)),
  addDate: (date) => dispatch(addDate(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);