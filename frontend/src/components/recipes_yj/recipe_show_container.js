import { connect } from 'react-redux';
import RecipeShow from './recipe_show';

const mapStateToProps = state => ({
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, null)(RecipeShow);