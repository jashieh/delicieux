import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart
});

const mapDispatchToProps = (dispatch) => ({
  // action to add to cart
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndex)