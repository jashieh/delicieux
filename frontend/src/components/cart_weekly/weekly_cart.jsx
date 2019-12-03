import React from 'react';
import NavBarContainer from '../nav/navbar_container';  
import WeeklyCartDayContainer from "./weekly_cart_day_container";
import WeeklyMacro from './weekly_macro';
import '../stylesheets/weekly_cart/weekly_cart.scss';

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

// TODO: ON MOUNT LOADS ALL INFORMATION
class WeeklyCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0
    }

    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.addMacros = this.addMacros.bind(this);
    this.removeMacros = this.removeMacros.bind(this);
  }

  // generate an array of weekdates and fetch recipe info
  componentDidMount() {
    let { getCart, user, cart, fetchFridge, fetchUser } = this.props;
    fetchFridge(user.id)
      .then(() => {
        if (!cart.dates)
          getCart(user.id)
            .then(() => this.getRecipes())
        else
          this.getRecipes();
      });
    fetchUser(user.id);
  }

  componentDidUpdate(oldProps) {
    let { getCart, user, cart, fetchFridge } = this.props;

    if (oldProps.cart !== cart)
      this.setState(this.state);
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
              .then(({ recipe } ) => {
                this.addMacros(recipe);
                results--;
                if (results === 0) this.setState({ dates });
              });
          }
          else if (!recipeId) 
            if (results === 0) this.setState( { dates} );
        }
    }
  }

  addMacros(recipe) {
    let recipeCalories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let recipeProtein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let recipeFat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let recipeCarbs = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;
    let recipeFiber = Object.values(recipe.nutrition).filter(nutrient => ["Fiber"].includes(nutrient.title))[0].amount;

    this.setState({
      calories: this.state.calories + recipeCalories,
      protein: this.state.protein + recipeProtein,
      fat: this.state.fat + recipeFat,
      carbs: this.state.carbs + recipeCarbs,
      fiber: this.state.fiber + recipeFiber
    });
    this.calories = this.calories + recipeCalories;

    this.fat = this.fat + recipeFat;
  }

  removeMacros(recipe) {
    let recipeCalories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let recipeProtein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let recipeFat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let recipeCarbs = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;
    let recipeFiber = Object.values(recipe.nutrition).filter(nutrient => ["Fiber"].includes(nutrient.title))[0].amount;

    this.setState({
      calories: this.state.calories - recipeCalories < 0 ? 0 : this.state.calories - recipeCalories,
      protein: this.state.protein - recipeProtein < 0 ? 0 : this.state.protein - recipeProtein,
      fat: this.state.fat - recipeFat < 0 ? 0 : this.state.fat - recipeFat,
      carbs: this.state.carbs - recipeCarbs < 0 ? 0 : this.state.carbs - recipeCarbs,
      fiber: this.state.fiber - recipeFiber < 0 ? 0 : this.state.fiber - recipeFiber,
    });
    this.calories = this.calories - recipeCalories < 0 ? 0 : this.calories - recipeCalories;

    this.fat = this.fat - recipeFat < 0 ? 0 : this.fat - recipeFat;
  }

  render() {
    let { dates } = this.state;
    if (dates.length > 0){
      return (
        <div className="weekly-cart">
          <div className="top">
            <NavBarContainer />
          </div>
          <div className="weekly-cart-header">Weekly Summary</div>
          <div className="weekly-cart-days">
            {dates.map((date, idx) => {
              return <WeeklyCartDayContainer date={date} key={idx} addMacros={this.addMacros} removeMacros={this.removeMacros}/>;
            })}
          </div>
          <WeeklyMacro calories={this.state.calories} 
          carbs={this.state.carbs} 
          protein={this.state.protein} 
          fat={this.state.fat} 
          fiber={this.state.fiber}
          user = {this.props.currentUser} />
        </div>
      );
    } else {
      return (
        <div className="weekly-cart"></div>
      );
    }
  }
}

export default WeeklyCart;