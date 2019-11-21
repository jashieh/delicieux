import React from 'react';

import IngredientSearchContainer from './ingredient_search_container';
import FridgeIngredientsContainer from './fridge_ingredients_container';

class Fridge extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
  }
  
  render() {
    return(
      <div className="fridge-container" >
        <IngredientSearchContainer />
        <FridgeIngredientsContainer />
      </div>
      );
  }
}
  
export default Fridge;