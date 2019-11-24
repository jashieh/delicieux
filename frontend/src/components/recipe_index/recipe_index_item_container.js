import { connect } from 'react-redux';

import RecipeIndexItem from './recipe_index_item';

import { addCartMeal } from '../../actions/cart_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  cart: state.entities.cart,
  currentDate: state.session.currentDate,
  
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = (dispatch) => ({
  addCartMeal: (cartId, mealInfo) => dispatch(addCartMeal(cartId, mealInfo)),
  openModal: (other) => dispatch(openModal('showRecipe', other)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndexItem)