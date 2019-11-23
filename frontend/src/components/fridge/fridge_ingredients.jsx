import React from 'react';
import FridgeItemContainer from './fridge_item_container';

class FridgeIngredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ingredients;

    if(this.props.ingredients) {
      let fridge = this.props.ingredients;
      ingredients = Object.keys(fridge).map(ingredientId => {
        return(
          // <li>{fridge[ingredientId].name}({fridge[ingredientId].amount})</li>
          <FridgeItemContainer ingredient={fridge[ingredientId]} key={ingredientId}/>
        );
      });
    }

    return(
      <div className="fridge-ingredients-container">
        <div className="fridge-contain">
          <div className="ingredients-contain">
            <ul>
              {ingredients}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FridgeIngredients;