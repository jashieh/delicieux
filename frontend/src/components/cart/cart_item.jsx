import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.subtractFromCart = this.subtractFromCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  // gets the user's cart
  componentDidMount() {

  }

  addToCart() {
    this.props.addRecipe(this.props.recipe.id);
  }

  subtractFromCart() {
    this.props.subtractRecipe(this.props.recipe.id);
  }

  removeFromCart() {
    this.props.removeRecipe(this.props.recipe.id);
  }

  render() {
    const { cart_item, recipe } = this.props;
    return (
      <div className="cart-item">
        <img className="cart-item-image" src={recipe.image} />
        <div className="cart-item-info">
          <div className="cart-item-remove" onClick={this.removeFromCart}>X</div>
          <div className="cart-item-name">{recipe.title}</div>
          <div className="cart-item-actions">
            <div className="cart-item-subtract" onClick={this.subtractFromCart}>-</div>
            <div className="cart-item-number">{cart_item.number}</div>
            <div className="cart-item-add" onClick={this.addToCart}>+</div>
          </div>
        </div>
      </div>
    )  
  }
}

export default CartItem;