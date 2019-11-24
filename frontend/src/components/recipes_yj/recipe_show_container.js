import { connect } from 'react-redux';
import RecipeShow from './recipe_show';

const mapStateToProps = state => ({
  fridge: state.entities.fridge,
  user: state.entities.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, null)(RecipeShow);