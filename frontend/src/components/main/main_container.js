import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal
});

export default connect(mapStateToProps)(Main);
