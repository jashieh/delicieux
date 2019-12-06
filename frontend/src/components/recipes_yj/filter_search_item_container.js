import { connect } from 'react-redux';
import { getIngredientById } from '../../util/ingredient_api_util';
import FilterSearchItem from './filter_search_item';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  getIngredientById: (id, amount, unit) => getIngredientById(id, amount, unit),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearchItem);