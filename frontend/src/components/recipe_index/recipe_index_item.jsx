import React from 'react';
// import addRecipe from '../../actions/cart_actions'
// import removeRecipe from '../../actions/cart_actions'

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor() {
    super(props);

    this.state = {
      number: 0
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    const { cart, recipe } = this.props;
    this.setState({ number: cart[recipe.id].number });
  }

  addItem() {
    if (this.state.number < MAX) {
      // dispatch(addRecipe(this.props.recipe.id)).then(...)
      this.setState({ number: this.state.number + 1 });
    }
  }

  removeItem() {
    if (this.state.number > MIN) {
      // dispatch(removeRecipe(this.props.recipe.id)).then(...)
      this.setState({ number: this.state.number - 1 });
    }
  }

  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe-index-item">
        <img className="recipe-index-item-image" src={recipe.url}/>
        <div className="recipe-index-item-info">
          <div className="recipe-index-item-add" onClick={this.addItem}>+</div>
          <div className="recipe-index-item-number">{this.state.number}</div>
          <div className="recipe-index-item-remove" onClick={this.removeItem}>-</div>
        </div>
      </div>
    )
  }
}

export default ReactIndexItem;