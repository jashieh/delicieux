import React from 'react';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipes } = this.props;
    // const { addToCart } = this.props; // TBD: action to add to a cart
  }
}

export default RecipeIndex;