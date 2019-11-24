import { connect } from 'react-redux';
import WeeklyCart from './weekly_cart';

import { getRecipeDB } from '../../actions/recipe_actions';
import { addCartDate, getCart } from '../../actions/cart_actions';
import { fetchFridge } from "../../actions/fridge_actions";

const mapStateToProps = state => ({
  user: state.session.user,

  cart: state.entities.cart,
  recipes: state.entities.recipes,
});

const mapDispatchToProps = dispatch => ({
  getRecipeDB: recipeId => dispatch(getRecipeDB(recipeId)),
  addCartDate: (cartId, dateInfo) => dispatch(addCartDate(cartId, dateInfo)),
  getCart: userId => dispatch(getCart(userId)),
  fetchFridge: userId => dispatch(fetchFridge(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeeklyCart)