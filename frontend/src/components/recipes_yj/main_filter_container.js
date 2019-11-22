import { connect } from 'react-redux';
import MainFilter from './main_filter';

const mapStateToDispatch = state => ({
  fridge: state.entities.fridge
})
export default connect(null, null)(MainFilter)