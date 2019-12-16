import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal,
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps)(Main);
