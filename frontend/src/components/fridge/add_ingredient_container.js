import { connect } from 'react-redux';
import { addFridgeIngredient, modifyIngredient } from '../../actions/fridge_actions';
import { closeModal } from '../../actions/modal_actions';

import AddIngredient from './add_ingredient';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  addFridgeIngredient: (userId, ingredient, amount) => dispatch(addFridgeIngredient(userId, ingredient, amount)),
  modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredient);

