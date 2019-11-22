import { connect } from 'react-redux';
import { modifyIngredient } from '../../actions/fridge_actions';

import { openModal } from '../../actions/modal_actions';

import FridgeItem from './fridge_item';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  openModal: (other) => dispatch(openModal('modifyIngredient', other))
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);

