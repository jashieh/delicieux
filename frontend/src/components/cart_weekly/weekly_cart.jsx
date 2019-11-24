import React from 'react';
import NavBarContainer from '../nav/navbar_container';  
import WeeklyCartDayContainer from "./weekly_cart_day_container";
import '../stylesheets/weekly_cart/weekly_cart.scss';

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

// TODO: ON MOUNT LOADS ALL INFORMATION
class WeeklyCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: []
    }

    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  // generate an array of weekdates and fetch recipe info
  componentDidMount() {
    let { getCart, user, cart, fetchFridge } = this.props;
    fetchFridge(user.id)
      .then(() => {
        if (!cart.dates)
          getCart(user.id)
            .then(() => this.getRecipes())
        else
          this.getRecipes();
      });
  }

  // Generates an array of dateStrings that represent the week's cart
  generateDates() {
    let currentDate = new Date();
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());

    let dateStrings = [currentDate.toDateString().slice(0, 15)];
    while (dateStrings.length < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      dateStrings.push(currentDate.toDateString().slice(0, 15));
    }

    return dateStrings;
  }

  // fetches all necessary recipes for a given week
  getRecipes() {
    let dates = this.generateDates();
    let { cart, recipes, addCartDate, getRecipeDB } = this.props;
    let recipeId;

    let results = 0;
    for (let i = 0; i < dates.length; i++) {
      if (!cart.dates[dates[i]]) {
        results++;
        addCartDate(cart.id, { date: dates[i] })
          .then(() => {
            results--;
            if (results === 0) this.setState({ dates })
          });
      }
      else
        for (let j = 0; j < TIMES.length; j++) {
          recipeId = cart.dates[dates[i]][TIMES[j]];
          if (recipeId && !recipes[recipeId]) {
            results++;
            getRecipeDB(recipeId)
              .then(() => {
                results--;
                if (results === 0) this.setState({ dates });
              });
          }
          else if (!recipeId) 
            if (results === 0) this.setState( { dates} );
        }
    }
  }

  render() {
    let { dates } = this.state;
    if (dates.length > 0)
      return (
        <div className="weekly-cart">
          <div className="top">
            <NavBarContainer />
          </div>
          <div className="weekly-cart-header">Weekly Summary</div>
          <div className="weekly-cart-days">
            {dates.map((date, idx) => {
              return <WeeklyCartDayContainer date={date} key={idx} />;
            })}
          </div>
        </div>
      );
    else
      return (
        <div className="weekly-cart"></div>
      )
  }
}

export default WeeklyCart;