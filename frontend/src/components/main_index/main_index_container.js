import MainIndex from './main_index';
import { connect } from 'react-redux';
import { fetchFridge } from '../../actions/fridge_actions';
import { fetchUser } from '../../actions/profile_actions';

const mapStateToProps = state => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(fetchFridge(userId)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex);