import { connect } from 'react-redux';

import WeeklyCartDay from './weekly_cart_day';
import { removeCartMeal } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  user: state.session.user,

  date: ownProps.date,
});

// For the "I ATE THIS" action
const mapDispatchToProps = dispatch => ({
  removeCartMeal: (cartId, mealInfo) => dispatch(removeCartMeal(cartId, mealInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeeklyCartDay);