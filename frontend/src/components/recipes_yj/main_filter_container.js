import { connect } from 'react-redux';
import MainFilter from './main_filter';
import { fetchFridge } from '../../actions/fridge_actions';
import { complexRecipeSearch, getRecipesByIngredients } from '../../actions/recipe_actions';
import { startLoad, stopLoad } from '../../actions/loading_actions';

const mapStateToProps = state => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(fetchFridge(userId)),
  complexRecipeSearch: ({
    search, cuisine, diet, intolerances, sort, sortDirection,
    minCalories, maxCalories, maxFat, maxCarbs, minProtein,
    ignorePantry, limit
  }) => dispatch(complexRecipeSearch({
    search, cuisine, diet, intolerances, sort, sortDirection,
    minCalories, maxCalories, maxFat, maxCarbs, minProtein,
    ignorePantry, limit
  })),
  getRecipesByIngredients: (ingredients, limit, ranking, ignorePantry) =>
    dispatch(getRecipesByIngredients(ingredients, limit, ranking, ignorePantry)),
  startLoad: load => dispatch(startLoad(load)),
  stopLoad: () => dispatch(stopLoad()),
  // searchIngredientByName: query => searchIngredientByName(query)
})
export default connect(mapStateToProps, mapDispatchToProps)(MainFilter)