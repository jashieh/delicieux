import { connect } from 'react-redux';
import { searchIngredientByName } from '../../actions/ingredient_actions';

import FilterSearch from './filter_search';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
});

const mapDispatchToProps = dispatch => ({
  // addFridgeIngredient: (userId, ingredient, amount) => dispatch(addFridgeIngredient(userId, ingredient, amount)),
  // modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  searchIngredientByName: query => searchIngredientByName(query)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);
