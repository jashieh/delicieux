import React from 'react';

class WeeklyIngredientsItem extends React.Component {
  render() {
    return(
      <li>
        <div className="fridge-item-image-container">
          <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
            alt=""
            className="fridge-item-image"/>
        </div>
        <div className="fridge-item-name">
        { this.props.ingredient.name }
        </div>
        {/* <div className="fridge-item-amount">
          { Math.floor(this.props.ingredient.amount) }
        </div> */}
      </li>
    );
  }
}


export default WeeklyIngredientsItem;