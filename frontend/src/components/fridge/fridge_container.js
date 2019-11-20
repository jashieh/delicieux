import { connect } from 'react-redux';
import { fetchFridge } from '../../actions/fridge_actions';
import Fridge from './fridge';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(fetchFridge(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);

