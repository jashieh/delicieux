import React from 'react';

import IngredientSearchContainer from './ingredient_search_container';
import FridgeIngredientsContainer from './fridge_ingredients_container';
import NavbarContainer from '../nav/navbar_container';
import Clock from '../clock/clock';

class Fridge extends React.Component {
  constructor(props) {
    super(props);
  }

  
  
  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
  }
  

  componentWillUnmount() {
    this.props.closeModal();
  }

  render() {
    return(
      <div className="fridge-container" >
        <div className="top">
          <NavbarContainer />
        </div>
        <div className="contain-all">
          <div className="fridge-top">
            <div className="fridge-title">My Ingredients</div>
            <div className="left-fridge" >
              {/* <Clock /> */}
              <IngredientSearchContainer />
            </div>
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