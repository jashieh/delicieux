import { connect } from 'react-redux';

import CartItem from './cart_item';
import { removeRecipe } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  time: ownProps.time,
  date: state.session.currentDate,
});

const mapDispatchToProps = dispatch => ({
  removeRecipe: (date, time) => dispatch(removeRecipe(date, time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);