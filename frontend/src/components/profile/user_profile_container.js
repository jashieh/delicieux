import { connect } from 'react-redux';
import { fetchFridge } from '../../actions/fridge_actions';


import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(fetchFridge(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

