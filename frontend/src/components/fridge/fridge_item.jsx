import React from 'react';

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li onClick={() => this.props.openModal(this.props.ingredient)}>
        <div className="fridge-item-image-container">
          <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
            alt=""
            className="fridge-item-image"/>
        </div>
        <div className="fridge-item-name">
        { this.props.ingredient.name }
        </div>
        <div className="fridge-item-amount">
          {this.props.ingredient.amount}
        </div>
      </li>
    );
  }
}

export default FridgeItem;