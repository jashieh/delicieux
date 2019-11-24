import { connect } from 'react-redux';
import WeeklyCartDay from './weekly_cart_day';

const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,

  date: ownProps.date,
});

// For the "I ATE THIS" action
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeeklyCartDay);