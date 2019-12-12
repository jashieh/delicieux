import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = state => ({
  fridge: state.entities.fridge,
  user: state.entities.user,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);