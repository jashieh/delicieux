import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  // gets the user's cart
  componentDidMount() {

  }

  removeFromCart() {
    const { date, time } = this.props;
    this.props.removeRecipe(date, time);
  }

  render() {
    const { time, recipe } = this.props;
    if (recipe) 
      return (
        <div className="cart-item">
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-info">
            <img className="cart-item-info-image" src={recipe.image} />
            <div className="cart-item-info-text">
              <div className="cart-item-name">{recipe.title}</div>
              <div className="cart-item-remove" onClick={this.removeFromCart}>Remove Item</div>
            </div>
          </div>
        </div>
      )  
    else
      return (
        <div className="cart-item">
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-info"></div>
        </div>
      )
  }
}

export default CartItem;