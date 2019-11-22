import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.recipe = this.recipe.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  recipe() {
    let { date, time, cart, recipes } = this.props;
    let recipeId = null;
    if (cart.dates[date]) recipeId = cart.dates[date][time]; //just a precaution

    if (recipes[recipeId]) return recipes[recipeId];
    else if (recipeId)
      this.props.getRecipeDB(recipeId).then(() => recipes[recipeId]);
    return recipeId
      ? { id: null, title: "ERROR: Recipe Not Found", img: "..." }
      : null;
  }

  // TODO: Implement an undo button
  removeFromCart() {
    const { date, time, cart } = this.props;
    this.props.removeCartMeal(cart.id, { date, time });
  }

  onDrop(e) {
    let { cart, date, time } = this.props;
    this.props.addCartMeal(cart.id, {
      date,
      time,
      recipeId: e.dataTransfer.getData("recipeId")
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { time } = this.props;
    let recipe = this.recipe();
    if (recipe)
      return (
        <div
          className="cart-item"
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        >
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-info">
            <img className="cart-item-info-image" src={recipe.image} />
            <div className="cart-item-info-text">
              <div className="cart-item-name">{recipe.title}</div>
              <div className="cart-item-remove" onClick={this.removeFromCart}>
                Remove Item
              </div>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div
          className="cart-item"
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        >
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-info"></div>
        </div>
      );
  }
}

export default CartItem;