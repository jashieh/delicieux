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

    this.previousDate = this.previousDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
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
    debugger;
    let { patchCart, userId, dates } = this.props;
    this.setState({ loading: true });
    patchCart(userId, { dates: dates })
      .then(
        () => this.setState( {loading: false })
      )
  }

  previousDate() {
    const { currentDate, dates, switchDate } = this.props;
    let previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);

    let date = previousDate.toString().slice(0, 15);
    if (dates[date]) switchDate(date);
  }

  nextDate() {
    const { currentDate, dates, switchDate, addDate } = this.props;
    let nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);

    let date = nextDate.toString().slice(0, 15);

    if (!dates[date]) addDate(date);
    switchDate(date);
  }

  //TODO: MAKE CLICKING THE CURRENT DATE OPEN A CALENDAR, WHERE WE CAN SELECT A DATE TO GO TO
  //      WILL NEED TO POPULATE ALL DATES IN BETWEEN IF YOU SKIP DATES...SO WILL NEED TO ACCOUNT FOR THAT
  render() {
    const { dates, currentDate } = this.props;
    const date = dates[currentDate];
    const times = ["BREAKFAST", "LUNCH", "DINNER"];
    let recipe;
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-left" onClick={this.previousDate}>{"<"}</div>
          <div className="cart-header-date">{currentDate}</div> 
          <div className="cart-header-right" onClick={this.nextDate}>{">"}</div>
        </div>
        <div className="cart-date">
          {times.map((time, idx) => {
            recipe = date[time] ? this.recipe(date[time]) : undefined;
            return <CartItemContainer key={idx}
                      time={time}
                      recipe={recipe} />
          })}
        </div>
        <div className="cart-save-button" onClick={this.saveCart}>Save Cart</div>
      </div>
    )
  }
}

export default Cart;