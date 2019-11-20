import React from 'react';

class IngredientSearchItem extends React.Component {
  render() {
    return(
      <li className="ingredient-search-li" onClick={() => this.props.openModal(this.props.ingredient)}>
        { this.props.ingredient.name }
      </li>
    );
  }
}

export default IngredientSearchItem;