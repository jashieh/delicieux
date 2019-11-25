import React from 'react';
import { modifyFridge } from '../../util/fridge_api_util';
import "../stylesheets/weekly_cart/weekly_cart_day.scss"

const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

class WeeklyCartDay extends React.Component {
  constructor(props) {
    super(props);

    this.recipe = {
      BREAKFAST: null,
      LUNCH: null,
      DINNER: null,
    };

    this.removeItem = this.removeItem.bind(this);
    this.makeItem = this.makeItem.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  removeItem(e, time) {
    e.stopPropagation();
    const { cart, date, removeCartMeal } = this.props;
    removeCartMeal(cart.id, { date, time });
  }

  makeItem(e, recipe) {
    e.stopPropagation();
    if (recipe.image !== "...") {
      const { user } = this.props;
      modifyFridge(user.id, recipe);
    }
  }

  openModal(e, recipe) {
    e.stopPropagation();
    if (recipe.image !== "...") 
      this.props.openModal(recipe);
  }

  render() {
    const { recipes, cart, date, openModal, addMacros } = this.props;
    let cartContent = 
      TIMES.map((time, idx) => {
        // Must pull recipes into an instance variable otherwise it won't be available
        //      ... map has it's own scope!
        this.recipe[time] = recipes[cart.dates[date][time]];
        if (!this.recipe[time] && recipes[cart.dates[date][time]]) {
          this.recipe[time] = {
            title: "Recipe Not Found",
            image: "...",
            recipeId: cart.dates[date][time]
          };
        }
        if (this.recipe[time]) {
          // addMacros(this.recipe[time]);
          return (
            <div className="weekly-cart-item" key={idx}>
              <div className="weekly-cart-item-time">{time}</div>
              <div className="weekly-cart-item-main">
                <div className="weekly-cart-item-info">
                  <div className="weekly-cart-item-info-text">
                    <div className="weekly-cart-item-info-left">
                      <div className="weekly-cart-item-name">{this.recipe[time].title.slice(0, 20) + ".."}</div>
                      <div className="weekly-cart-item-buttons">
                        <div className="weekly-cart-item-remove" onClick={(e) => { this.removeItem(e, time) }}>
                          Remove
                            </div>
                        <div className="weekly-cart-item-eat" onClick={(e) => { this.makeItem(e, this.recipe[time]) }}>
                          Make Meal
                            </div>
                      </div>
                    </div>
                    <div className="weekly-cart-image">
                      <img className="weekly-cart-item-info-image"
                        src={this.recipe[time].image}
                        onClick={(e) => this.openModal(e, this.recipe[time])} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="weekly-cart-item" key={idx}>
              <div className="weekly-cart-item-time">{time}</div>
              <div className="weekly-cart-item-info"></div>
            </div>
          );
        }
      });
    
    return (
      <div className="weekly-cart-day">
        <div className="weekly-cart-header-date">{date}</div>
        <div className="weekly-cart-date">
          {cartContent}
        </div>
      </div>
    )
  }
}

export default WeeklyCartDay;