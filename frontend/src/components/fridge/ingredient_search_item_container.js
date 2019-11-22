import { connect } from 'react-redux';
import { addFridgeIngredient, modifyIngredient } from '../../actions/fridge_actions';
import { getIngredientById } from '../../util/ingredient_api_util';
import { openModal } from '../../actions/modal_actions';

import IngredientSearchItem from './ingredient_search_item';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  addFridgeIngredient: (userId, ingredient, amount) => dispatch(addFridgeIngredient(userId, ingredient, amount)),
  modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  getIngredientById: (id, amount, unit) => getIngredientById(id, amount, unit),
  openModal: (other) => dispatch(openModal('addIngredient', other))
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientSearchItem);

