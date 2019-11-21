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
        My Ingredients
        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
}

export default FridgeIngredients;