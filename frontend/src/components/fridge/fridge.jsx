import React from 'react';

import IngredientSearchContainer from './ingredient_search_container';

class Fridge extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
  }
  
  render() {
    return(
      <div className="fridge-container">
        <IngredientSearchContainer />
        <div>
          My current ingredients
        </div>
      </div>
      );
  }
}
  
export default Fridge;