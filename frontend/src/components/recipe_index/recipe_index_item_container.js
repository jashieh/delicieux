import { connect } from 'react-redux';

import RecipeIndexItem from './recipe_index_item';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  cart: state.entities.cart,
  currentDate: state.session.currentDate,
  
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (other) => dispatch(openModal('showRecipe', other))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndexItem)