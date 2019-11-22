import { connect } from 'react-redux';

import CartItem from './cart_item';
import { removeCartMeal } from '../../actions/cart_actions';
import { getRecipeDB } from '../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => ({
  time: ownProps.time,
  date: state.session.currentDate,
  
  cart: state.entities.cart,
  recipes: state.entities.recipes,
});

const mapDispatchToProps = dispatch => ({
  removeCartMeal: (cartId, mealInfo) => dispatch(removeCartMeal(cartId, mealInfo)),
  getRecipeDB: (recipeId) => dispatch(getRecipeDB(recipeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);