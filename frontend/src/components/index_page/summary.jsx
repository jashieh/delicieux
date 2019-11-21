import React from 'react';
import '../stylesheets/summary/summary.scss';

import CartContainer from '../cart/cart_container';
import RecipeIndexContainer from '../recipe_index/recipe_index_container';

class Summary extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="summary-page">
        <RecipeIndexContainer />
        <CartContainer />
      </div>
    )
  }
}

export default Summary;