import React from 'react';
import CartItemContainer from './cart_item_container';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

    this.previousDate = this.previousDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  componentDidMount() {
    let { getCart, userId } = this.props;
    getCart(userId)
      .then(
        () => this.setState({ loading: false })
      );
  }

  previousDate() {
    const { currentDate, dates, switchDate, addCartDate, cartId } = this.props;
    let previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);

    let date = previousDate.toString().slice(0, 15);

    if (!dates[date])
      addCartDate(cartId, { date: date });
    else 
      switchDate(date);
  }

  nextDate() {
    const { currentDate, dates, switchDate, addCartDate, cartId } = this.props;
    let nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);

    let date = nextDate.toString().slice(0, 15);

    // MUST PREVENT CART FROM LOADING DURING THIS, OR FOR SOME REASON THE
    // COMPONENT WILL RE-RENDER BEFORE ADDCARTDATE EVEN HAPPENS
    if (!dates[date])
      addCartDate(cartId, { date: date });
    else
      switchDate(date);
  }

  //TODO: MAKE CLICKING THE CURRENT DATE OPEN A CALENDAR, WHERE WE CAN SELECT A DATE TO GO TO
  //      WILL NEED TO POPULATE ALL DATES IN BETWEEN IF YOU SKIP DATES...SO WILL NEED TO ACCOUNT FOR THAT
  render() {

    if (this.state.loading)
      return <div className="cart"></div>;

    const { dates, currentDate } = this.props;
    const times = ["BREAKFAST", "LUNCH", "DINNER"];
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-left" onClick={this.previousDate}>
            <div>{"<"}</div>
          </div>
          <div className="cart-header-date">{currentDate}</div> 
          <div className="cart-header-right" onClick={this.nextDate}>{">"}</div>
        </div>
        <div className="cart-date">
          {times.map((time, idx) => {
            return <CartItemContainer key={idx}
                      time={time}/>
          })}
        </div>
      </div>
    )
  }
}

export default Cart;