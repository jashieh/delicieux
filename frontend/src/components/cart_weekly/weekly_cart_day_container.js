import { connect } from 'react-redux';

import WeeklyCartDay from './weekly_cart_day';
import { removeCartMeal, makeRecipe, unmakeRecipe } from '../../actions/cart_actions';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  user: state.session.user,
  date: ownProps.date,
});

// For the "I ATE THIS" action
const mapDispatchToProps = dispatch => ({
  removeCartMeal: (cartId, mealInfo) => dispatch(removeCartMeal(cartId, mealInfo)),
  openModal: (other) => dispatch(openModal('showRecipe', other)),

  makeRecipe: (date, time) => dispatch(makeRecipe({ date, time })),
  unmakeRecipe: (date, time) => dispatch(unmakeRecipe({ date, time })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeeklyCartDay);