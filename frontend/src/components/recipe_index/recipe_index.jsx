import React from 'react';
import RecipeIndexItemContainer from './recipe_index_item_container';
import '../stylesheets/recipe_index/recipe_index.scss';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }

    this.updateRecipes = this.updateRecipes.bind(this);
  }

  // Loads all of the recipes upon mounting
  componentDidMount() {
    debugger;
    let { user, fetchFridge, getRecipesByIngredients, getRandomRecipes, complexRecipeSearch } = this.props;
    fetchFridge(user.id)
      .then(
        ({ fridge }) => {
          let { ingredients } = fridge;
          ingredients = Object.keys(ingredients).map((id) => ingredients[id].name);
          console.log(ingredients);
          ingredients.length === 0 ? getRandomRecipes(6) : getRecipesByIngredients(ingredients, 24)
        }
      );
  }

  componentDidUpdate(oldProps) {
    if (oldProps.recipes !== this.props.recipes)
      this.setState(this.state);
  }

  updateRecipes() {
    this.setState({ loading: true });
    this.props.getRecipes(this.props.recipe_filters)
      .then(
        () => this.setState({ loading: false }),
        () => this.setState({ loading: false })
      )
  }

  render() {
    const { recipes } = this.props;
    const indexRecipes = recipes.indexOrder.map((recipeId) => recipes[recipeId]);
    return (
      <div className="recipe-index">
        {indexRecipes.map((recipe, idx) => {
          return <RecipeIndexItemContainer key={idx}
                    recipe={recipe} 
                    rotateToBack={() => this.props.rotateRecipe(idx)}/>
        })}
      </div>
    )
  }
}

export default RecipeIndex;