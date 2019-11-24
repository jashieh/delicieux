import React from 'react';
import Utensil from '../stylesheets/assets/cutlery.png';

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
    if (e.dataTransfer.getData("recipeId")) {
      let { cart, date, time, userId, addCartMeal, getCart } = this.props;
      addCartMeal(cart.id, {
        date,
        time,
        recipeId: parseInt(e.dataTransfer.getData("recipeId")),
      })
    }
    // .then(
    //   () => getCart(userId)  
    // )

    /* 
      precaution so re-render only happens AFTER the item is added to backend
       comment this in and comment out "ADD_RECIPE" in the cart_reducer to active
    */
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
        <div className="cart-item" onDragOver={this.onDragOver} onDrop={this.onDrop}>
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-main">

            <div className="cart-item-info">
              <div className="cart-item-info-text">
                <div className="cart-item-name">{recipe.title.slice(0, 20) + ".."}</div>
                <div className="cart-image" >
                  <img className="cart-item-info-image" src={recipe.image} />
                </div>
              </div>

              <div className="cart-item-bottom">
                <div className="cuisine">
                  <div className="cuisine-image">
                    <img src={Utensil} className="uten-icon"/>
                  </div>
                  Cuisine
                </div>
                <div>
                  10M
                </div>
                <div>
                  16
                </div>
                <div className="cart-item-remove" onClick={this.removeFromCart}>X</div>
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