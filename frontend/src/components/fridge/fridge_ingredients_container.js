import { connect } from 'react-redux';

import FridgeIngredients from './fridge_ingredients';

const mapStateToProps = (state, ownProps) => ({
  ingredients: state.entities.fridge.ingredients
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeIngredients);

