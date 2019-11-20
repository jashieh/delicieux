import { connect } from 'react-redux';

import RecipeIndexItem from './recipe_index_item';
import { addCartMeal } from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  currentDate: state.session.currentDate,
  
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = (dispatch) => ({
  addCartMeal: (cartId, mealInfo) => dispatch(addCartMeal(cartId, mealInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndexItem)