import React from 'react';
import "../stylesheets/weekly_cart/weekly_cart_day.scss"

const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

class WeeklyCartDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipes, cart, date } = this.props;
    let recipe;
    return (
      <div className="weekly-cart-day">
        <div className="weekly-cart-day-date">{date}</div>
        <div className="weekly-cart-day-meals">
          { TIMES.map((time, idx) => {
            recipe = recipes[cart.dates[date][time]];
            if (recipe)
              return (
                <div className="weekly-cart-item" key={idx}>
                  <div className="weekly-cart-item-header">{time}</div>
                  <div className="weekly-cart-item-info">
                    <img className="weekly-cart-item-info-image" src={recipe.image} />
                    <div className="weekly-cart-item-info-text">
                      <div className="weekly-cart-item-name">{recipe.title}</div>
                      <div className="weekly-cart-item-remove">Remove Item</div>
                      <div className="weekly-cart-item-eat">Made Item</div>
                    </div>
                  </div>
                </div>
              );
            else
              return (
                <div className="weekly-cart-item" key={idx}>
                  <div className="weekly-cart-item-header">{time}</div>
                  <div className="weekly-cart-item-info"></div>
                </div>
              );
          })}
        </div>
      </div>
    )
  }
}

export default WeeklyCartDay;