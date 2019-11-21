import React from 'react';

class IngredientSearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);

  }

  enter() {
    this.setState({ visible: true });
  }

  leave() {
    this.setState({ visible: false });
  }

  
  render() {
    return(
      <li className="ingredient-search-li" 
        onClick={() => this.props.openModal(this.props.ingredient)}
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}>
        <div className="ingredient-search-li-name">
          { this.props.ingredient.name }
        </div>
        { this.state.visible && <div className="add-ingredient-plus">+</div>}
      </li>
    );
  }
}

export default IngredientSearchItem;