import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { openSide } from '../../actions/side_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  openSide: (side) => dispatch(openSide(side))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);