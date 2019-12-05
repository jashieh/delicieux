import React from 'react';
import WeeklyIngredientsItemContainer from './weekly_ingredients_item_container'

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

class WeeklyIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      ingredients: []
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
    let newIngredients = [];
    for(let i = 0; i < recipe.ingredients.length; i++) {
      newIngredients.push(recipe.ingredients[i]);
    }

    newIngredients = newIngredients.concat(this.state.ingredients);
    this.setState({ ingredients: newIngredients});
  }
  
  render() {
    let ing = [];
    let filtered = [];
    let ids = [];

    for(let i = 0; i < this.state.ingredients.length; i++) {
      if(!ids.includes(this.state.ingredients[i].id)) {
        ids.push(this.state.ingredients[i].id);
        filtered.push(this.state.ingredients[i]);

        ing.push(
          <WeeklyIngredientsItemContainer 
            ingredient={this.state.ingredients[i]}
            key={this.state.ingredients[i].id}/>
        );
      }
    }

    return(
      <div className="weekly-ingredients-container">
        This Week's Required Ingredients

        <ul>
          { ing }
        </ul>
      </div>
    );
  }
}

export default WeeklyIngredients;