import React from 'react';
import CartItemContainer from './cart_item_container';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.saveCart = this.saveCart.bind(this);
    this.recipe = this.recipe.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  // gets the user's cart
  componentDidMount() {

  }

  recipe(recipe_id) {
    const { recipes } = this.props;
    for (let i = 0; i < recipes.length; i++)
      if (recipes[i].id === recipe_id) return recipes[i];
    return { id: null, title: "Recipe Not Found", img: "..." };
  }

  //Removes the cart item by dispatching an action
  removeCartItem(idx) {

  }

  //saves the cart to database using user_id
  saveCart() {

  }

  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        <div className="cart-items">
          {cart.map((cart_item, idx) => {
            return <CartItemContainer key={idx}
                      cart_item={cart_item}
                      recipe={this.recipe(cart_item.recipe_id)}
                      removeItem={() => this.removeCartItem(idx)}/>
          })}
        </div>
        <div className="cart-save-button">Save Cart</div>
      </div>
    )
  }
}

export default Cart;