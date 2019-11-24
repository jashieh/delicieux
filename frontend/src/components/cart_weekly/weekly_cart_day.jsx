import React from 'react';
import { modifyFridge } from '../../util/fridge_api_util';
import "../stylesheets/weekly_cart/weekly_cart_day.scss"

const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

class WeeklyCartDay extends React.Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.makeItem = this.makeItem.bind(this);
  }

  removeItem(e, time) {
    e.stopPropagation();
    const { cart, date, removeCartMeal } = this.props;
    removeCartMeal(cart.id, { date, time });
  }

  makeItem(e, recipe) {
    e.stopPropagation();
    const { user } = this.props;
    modifyFridge(user.id, recipe);
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
                      <div className="weekly-cart-item-remove" onClick={(e) => this.removeItem(e, time)}>
                        Remove Item
                      </div>
                      <div className="weekly-cart-item-eat" onClick={(e) => this.makeItem(e, recipe)}>
                        Made Item
                      </div>
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