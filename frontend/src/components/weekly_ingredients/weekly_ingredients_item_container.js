import { connect } from 'react-redux';
import { modifyIngredient } from '../../actions/fridge_actions';
import { openModal } from '../../actions/modal_actions';
import WeeklyIngredientsItem from './weekly_ingredients_item';

const mapStateToProps = (state, ownProps) => ({
  ingredients: state.entities.fridge.ingredients,
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  openModal: (other) => dispatch(openModal('modifyIngredient', other))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyIngredientsItem);

