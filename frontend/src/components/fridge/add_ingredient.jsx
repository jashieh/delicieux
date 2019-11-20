import React from 'react';

class AddIngredient extends React.Component {

  render() {
    return(
      <div>
        { this.props.ingredient.name }
      </div>
    );
  }
}

export default AddIngredient;