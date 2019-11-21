import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.recipe = this.recipe.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    debugger;
  }

  componentDidUpdate() {
    debugger;
  }

  recipe() {
    let { date, time, cart, recipes } = this.props;
    let recipeId = null;
    if(cart.dates[date]) { //Just a precaution
      recipeId = cart.dates[date][time];
    }

    for (let i = 0; i < recipes.length; i++)
      if (recipes[i].id === recipeId) return recipes[i];

    return recipeId ? { id: null, title: "ERROR: Recipe Not Found", img: "..." } : null
  }

  // TODO: Implement an undo button
  removeFromCart() {
    const { date, time, cart } = this.props;
    this.props.removeCartMeal(cart.id, { date, time })
  }

  render() {
    const { time } = this.props;
    let recipe = this.recipe();
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