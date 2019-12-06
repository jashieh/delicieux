import React from 'react';
import '../stylesheets/recipes_index/main_filter.scss';

export default class FilterSearchItem extends React.Component {
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
    return (
      <li className="filter-search-li"
        onClick={() => {this.props.addIngredient(this.props.ingredient.name)}}
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}>
        <div className="filter-search-li-name">
          {this.props.ingredient.name}
        </div>
        {this.state.visible && <div className="add-ingredient-plus">+</div>}
      </li>
    );
  }
}
