import React from 'react';
import CartItemContainer from './cart_item_container';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

    this.saveCart = this.saveCart.bind(this);
    this.recipe = this.recipe.bind(this);
  }

  // gets the user's cart
  componentDidMount() {
    let { getCart, userId } = this.props;
    debugger
    getCart(userId)
      .then(
        () => this.setState({ loading: false })
      );
  }

  recipe(recipe_id) {
    const { recipes } = this.props;
    for (let i = 0; i < recipes.length; i++)
      if (recipes[i].id === recipe_id) return recipes[i];
    return { id: null, title: "Recipe Not Found", img: "..." };
  }

  //saves the cart to database using user_id
  saveCart() {
    let { patchCart, userId, cart } = this.props;
    this.setState({ loading: true });
    patchCart(userId, { items: cart.items })
      .then(
        () => this.setState( {loading: false })
      )
  }

  render() {
    const { cart } = this.props;
    debugger;
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
        <div className="cart-save-button" onClick={this.saveCart}>Save Cart</div>
      </div>
    )
  }
}

export default Cart;