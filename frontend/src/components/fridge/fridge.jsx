import React from 'react';

import IngredientSearchContainer from './ingredient_search_container';
import FridgeIngredientsContainer from './fridge_ingredients_container';
import NavbarContainer from '../nav/navbar_container';

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
        <NavbarContainer />
        <div className="contain-all">
          <div className="left-fridge" >
            <IngredientSearchContainer />
          </div>
          <div className="right-fridge" >
            <FridgeIngredientsContainer />
          </div>
        </div>
      </div>
      );
  }
}
  
export default Fridge;