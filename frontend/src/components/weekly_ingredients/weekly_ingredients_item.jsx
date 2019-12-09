import React from 'react';

class WeeklyIngredientsItem extends React.Component {
  render() {
    let amount = 0;
    this.props.ingredient.amount % 1 === 0 ? amount = this.props.ingredient.amount :
      amount = this.props.ingredient.amount.toFixed(2);
    return(
      <li>
        <div className="weekly-ing-image-container">
          <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
            alt=""
            className="weekly-ing-image"/>
        </div>
        <div className="weekly-ing-right">
          <div className={`weekly-ing-name ${this.props.have}`}>
          { this.props.ingredient.name }
          </div>
          <div className="fridge-item-amount">
            { amount } 
            { this.props.ingredient.unit }
          </div>
        </div>
      </li>
    );
  }
}


export default WeeklyIngredientsItem;