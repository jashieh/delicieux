import { connect } from 'react-redux';
import { addCartDate, getCart } from '../../actions/cart_actions';
import { fetchFridge } from '../../actions/fridge_actions';
import { getRecipeDB } from '../../actions/recipe_actions';

import WeeklyIngredients from './weekly_ingredients';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  cart: state.entities.cart,
  recipes: state.entities.recipes,
  ingredients: state.entities.fridge.ingredients
});

const mapDispatchToProps = dispatch => ({
  getCart: userId => dispatch(getCart(userId)),
  fetchFridge: userId => dispatch(fetchFridge(userId)),
  getRecipeDB: recipeId => dispatch(getRecipeDB(recipeId)),
  addCartDate: (cartId, dateInfo) => dispatch(addCartDate(cartId, dateInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyIngredients);

