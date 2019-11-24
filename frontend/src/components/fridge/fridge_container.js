import { connect } from 'react-redux';
import { fetchFridge } from '../../actions/fridge_actions';
import Fridge from './fridge';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(fetchFridge(userId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);

