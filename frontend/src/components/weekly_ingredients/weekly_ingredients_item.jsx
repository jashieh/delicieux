import React from 'react';

class WeeklyIngredientsItem extends React.Component {
  render() {
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
            { this.props.ingredient.amount } 
            { this.props.ingredient.unit }
          </div>
        </div>
      </li>
    );
  }
}


export default WeeklyIngredientsItem;