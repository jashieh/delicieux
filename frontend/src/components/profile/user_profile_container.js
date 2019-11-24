import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/profile_actions'; 
import { calorieCalc } from '../../util/calorie_util';


import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: id => dispatch(fetchUser(id)),
  calorieCalc: (user) => calorieCalc(user)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

