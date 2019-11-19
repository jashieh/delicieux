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
    // this.props.getRecipes(this.props.recipe_filters)
    //   .then(
    //     this.setState({loaded: true}),
    //     //failure
    //   )
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
    return (
      <div className="recipe-index">
        {recipes.slice(0, 8).map((recipe, idx) => {
          return <RecipeIndexItemContainer key={idx}
                    recipe={recipe} 
                    rotateToBack={() => this.props.rotateRecipe(idx)}/>
        })}
      </div>
    )
  }
}

export default RecipeIndex;