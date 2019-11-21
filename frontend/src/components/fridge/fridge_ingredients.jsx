import React from 'react';

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
          <li>{fridge[ingredientId].name}({fridge[ingredientId].amount})</li>
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