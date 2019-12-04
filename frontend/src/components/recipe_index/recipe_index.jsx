import React from 'react';
import RecipeIndexItemContainer from './recipe_index_item_container';
import '../stylesheets/recipe_index/recipe_index.scss';
import flip from '../stylesheets/assets/cook.gif';
// import flip from '../stylesheets/assets/toast.gif';


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
    let { user, fetchFridge, getRecipesByIngredients, getRandomRecipes, complexRecipeSearch, startLoad } = this.props;
    startLoad("loading");
    fetchFridge(user.id)
      .then(
        ({ fridge }) => {
          let { ingredients } = fridge;
          ingredients = Object.keys(ingredients).map((id) => ingredients[id].name);
          console.log(ingredients);
          ingredients.length === 0 ? getRandomRecipes(12) : getRecipesByIngredients(ingredients, 12)
        }
      );
    
    // this.setState({loading: true}, ()=> {
    //   fetchFridge(user.id)
    //     .then(
    //       ({ fridge }) => {
    //         let { ingredients } = fridge;
    //         ingredients = Object.keys(ingredients).map((id) => ingredients[id].name);
    //         if (ingredients.length === 0) {
    //           getRandomRecipes(6).then(this.setState({ loading: false }))
    //         } else {
    //         getRecipesByIngredients(ingredients, 24).then(this.setState({ loading: false }))
    //         }  
    //       }
    //     );
    // })
    
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
    const { recipes, loading } = this.props;
    const indexRecipes = recipes.indexOrder.map((recipeId) => recipes[recipeId]);
    if (loading) {
      return (
        <div className="loading-cont">
          <div className="loading-img-cont">
            <img className="loading-img" src={flip} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="recipe-index">
          {indexRecipes.map((recipe, idx) => {
            return <RecipeIndexItemContainer key={idx}
              recipe={recipe}
              rotateToBack={() => this.props.rotateRecipe(idx)} />
          })}
        </div>
      )
    }
  }
}

export default RecipeIndex;