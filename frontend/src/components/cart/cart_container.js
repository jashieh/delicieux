import { connect } from 'react-redux';

import Cart from './cart';
import { getCart, switchDate, addCartDate } from '../../actions/cart_actions';
import '../stylesheets/cart/cart.scss';

const mapStateToProps = state => ({
  dates: state.entities.cart.dates,

  cartId: state.entities.cart.id,
  userId: state.session.user.id,
  currentDate: state.session.currentDate,
});

const mapDispatchToProps = dispatch => ({
  getCart: userId => dispatch(getCart(userId)),
  addCartDate: (cartId, dateInfo) => dispatch(addCartDate(cartId, dateInfo)),

  switchDate: date => dispatch(switchDate(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);