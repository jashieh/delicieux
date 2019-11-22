import React from 'react';

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    return(
      <li onClick={() => this.props.openModal(this.props.ingredient)}>
        { this.props.ingredient.name }({this.props.ingredient.amount})
      </li>
    );
  }
}

export default FridgeItem;