import { connect } from 'react-redux';
// import { addFridgeIngredient, modifyIngredient } from '../../actions/fridge_actions';
import { searchIngredientByName } from '../../actions/ingredient_actions';

import IngredientSearch from './ingredient_seach';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  // addFridgeIngredient: (userId, ingredient, amount) => dispatch(addFridgeIngredient(userId, ingredient, amount)),
  // modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  searchIngredientByName: query => searchIngredientByName(query)
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientSearch);

