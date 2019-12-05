import React from 'react';
import WeeklyIngredientsItemContainer from './weekly_ingredients_item_container'

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

class WeeklyIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      ingredients: {}
    }

    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    let { getCart, userId, cart, fetchFridge} = this.props;
    fetchFridge(userId)
      .then(() => {
        if (!cart.dates) {
          getCart(userId)
            .then(() => this.getRecipes())
        } else {
          this.getRecipes();
      }});
  }

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
      } else {
        for (let j = 0; j < TIMES.length; j++) {
          recipeId = cart.dates[dates[i]][TIMES[j]];
          if (recipeId && recipes[recipeId]) {
            this.modifyIngredients(recipes[recipeId]);
          } else if (recipeId && !recipes[recipeId]) {
            results++;
            getRecipeDB(recipeId)
              .then(({ recipe } ) => {
                this.modifyIngredients(recipe);
                results--;
                if (results === 0) this.setState({ dates });
              });
          } else if (!recipeId) {
            if (results === 0) this.setState( { dates} );
        }
      }
    }
    }
  }

  modifyIngredients(recipe) {
    let ing = {};
    for(let i = 0; i < recipe.ingredients.length; i++) {
      ing[recipe.ingredients[i].id] = recipe.ingredients[i];
    }
    ing = Object.assign(ing, this.state.ingredients);
    this.setState({ ingredients: ing });
  }

  compare() {

  }
  
  render() {
    let ing = [];
    let ids = Object.keys(this.state.ingredients);

    for(let i = 0; i < ids.length; i++) {
      let id = ids[i];
      let have = this.props.ingredients[id] ? "have" : "dont";
      if(have === "have") {
        ing.unshift(<WeeklyIngredientsItemContainer 
          ingredient={this.state.ingredients[id]}
          key={this.state.ingredients[id].id}
          have={have}/>);
      }
      else {
        ing.push(<WeeklyIngredientsItemContainer 
          ingredient={this.state.ingredients[id]}
          key={this.state.ingredients[id].id}
          have={have}/>);
      }
    }

    return(
      <div className="weekly-ingredients-container">
        <div className="title">
          This Week's Required Ingredients
        </div>
        <ul>
          { ing }
        </ul>
      </div>
    );
  }
}

export default WeeklyIngredients;