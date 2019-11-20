import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    }

    this.addToCart = this.addToCart.bind(this);
    this.subtractFromCart = this.subtractFromCart.bind(this);
    this.rotateToBack = this.rotateToBack.bind(this);
  }

  componentDidMount() {
    let { recipe, cart } = this.props;
    for (let i = 0; i < cart.length; i++)
      if (cart[i].recipe_id === recipe.id)
        this.setState({ number: cart[i].number });
  }

  componentDidUpdate(ownProps) {
    let { recipe, recipes, cart } = this.props;
    if (ownProps.cart !== cart || ownProps.recipes !== recipes) {
      for (let i = 0; i < cart.length; i++)
        if (cart[i].recipe_id === recipe.id) {
          this.setState({ number: cart[i].number });
          return;
        }
      this.setState({ number: 0 });
    }
  }

  addToCart() {
    if (this.state.number < MAX) {
      this.props.addRecipe(this.props.recipe.id);
      this.setState({ number: this.state.number + 1 });
    }
  }

  subtractFromCart() {
    if (this.state.number > MIN) {
      this.props.subtractRecipe(this.props.recipe.id);
      this.setState({ number: this.state.number - 1 });
    }
  }

  rotateToBack() {
    const { rotateToBack, removeRecipe, recipe } = this.props;
    rotateToBack();
    removeRecipe(recipe.id);
  }

  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe-index-item">
        <div className="recipe-index-item-remove" onClick={this.rotateToBack}>X</div>
        <div className="recipe-index-item-name">{recipe.title}</div>
        <img className="recipe-index-item-image" src={recipe.image}/>
        <div className="recipe-index-item-actions">
          <div className="recipe-index-item-subtract" onClick={this.subtractFromCart}>-</div>
          <div className="recipe-index-item-number">{this.state.number}</div>
          <div className="recipe-index-item-add" onClick={this.addToCart}>+</div>
        </div>
      </div>
    )
  }
}

export default RecipeIndexItem;