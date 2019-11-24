import { connect } from 'react-redux';

import CartItem from './cart_item';
import { removeCartMeal, addCartMeal, getCart } from '../../actions/cart_actions';
import { getRecipeDB } from '../../actions/recipe_actions';
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
  time: ownProps.time,
  date: state.session.currentDate,
  userId: state.session.user.id,

  cart: state.entities.cart,
  recipes: state.entities.recipes,
});

const mapDispatchToProps = dispatch => ({
  addCartMeal: (cartId, mealInfo) => dispatch(addCartMeal(cartId, mealInfo)),
  removeCartMeal: (cartId, mealInfo) => dispatch(removeCartMeal(cartId, mealInfo)),
  
  getRecipeDB: (recipeId) => dispatch(getRecipeDB(recipeId)),
  getCart: (userId) => dispatch(getCart(userId)),

  openModal: (other) => dispatch(openModal('showRecipe', other))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);