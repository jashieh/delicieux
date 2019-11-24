import React from 'react';
import { modifyFridge } from '../../util/fridge_api_util';
import "../stylesheets/weekly_cart/weekly_cart_day.scss"

const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

class WeeklyCartDay extends React.Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.makeItem = this.makeItem.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  removeItem(time) {
    const { cart, date, removeCartMeal } = this.props;
    removeCartMeal(cart.id, { date, time });
  }

  makeItem(recipe) {
    if (recipe.img !== "...") {
      const { user } = this.props;
      modifyFridge(user.id, recipe);
    }
  }

  openModal(recipe) {
    if (recipe.img !== "...") 
      this.props.openModal(recipe);
  }

  render() {
    const { recipes, cart, date } = this.props;
    let recipe;
    return (
      <div className="weekly-cart-day">
        <div className="weekly-cart-header-date">{date}</div>
        <div className="weekly-cart-date">
          { TIMES.map((time, idx) => {
            recipe = recipes[cart.dates[date][time]];
            if (!recipe && cart.dates[date][time]) 
              recipe = {
                title: "Recipe Not Found",
                img: "...",
                recipeId: cart.dates[date][time]
              };
            if (recipe)
              return (
                <div className="weekly-cart-item" key={idx}>
                  <div className="weekly-cart-item-time">{time}</div>
                  <div className="weekly-cart-item-main">
                    <div className="weekly-cart-item-info">
                      <div className="weekly-cart-item-info-text">
                        <div className="weekly-cart-item-info-left">
                          <div className="weekly-cart-item-name">{recipe.title.slice(0, 20) + ".."}</div>
                          <div className="weekly-cart-item-buttons">
                            <div className="weekly-cart-item-remove" onClick={() => this.removeItem(time)}>
                              Remove
                            </div>
                            <div className="weekly-cart-item-eat" onClick={() => this.makeItem(recipe)}>
                              Make Meal
                            </div>
                          </div>
                        </div>
                        <div className="weekly-cart-image">
                          <img className="weekly-cart-item-info-image" src={recipe.image} onClick={()=> this.openModal(recipe)}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            else
              return (
                <div className="weekly-cart-item" key={idx}>
                  <div className="weekly-cart-item-time">{time}</div>
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