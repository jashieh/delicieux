import React from 'react';
import CartItemContainer from './cart_item_container';

const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

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
    // let { getCart, userId } = this.props;
    // debugger
    // getCart(userId)
    //   .then(
    //     () => this.setState({ loading: false })
    //   );
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
    patchCart(userId, { cartDates: cart.dates })
      .then(
        () => this.setState( {loading: false })
      )
  }

  render() {
    const { dates, currentDate } = this.props;
    const date = dates[currentDate];
    let recipe;
    debugger;
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-left">{"<"}</div>
          <div className="cart-header-date">{currentDate}</div>
          <div className="cart-header-right">{">"}</div>
        </div>
        <div className="cart-date">
          {date.map((dateItem, idx) => {
            recipe = dateItem ? this.recipe(dateItem.recipe_id) : undefined;
            return <CartItemContainer key={idx}
                      time={TIMES[idx]}
                      recipe={recipe} />
          })}
        </div>
        <div className="cart-save-button" onClick={this.saveCart}>Save Cart</div>
      </div>
    )
  }
}

export default Cart;