import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/profile_actions'; 


import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

