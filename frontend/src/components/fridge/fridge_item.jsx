import React from 'react';

class FridgeItem extends React.Component {
  render() {
    return(
      <div onClick={() => this.props.openModal(this.props.ingredient)}>
        { this.props.ingredient.name }
      </div>
    );
  }
}

export default FridgeItem;