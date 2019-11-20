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
      <div>
        fridge
        <IngredientSearchContainer />
      </div>
      );
  }
}
  
export default Fridge;