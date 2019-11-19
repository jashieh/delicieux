import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // Loads all of the recipes upon mounting
  componentDidMount() {
  }

  // If filters change, then reload all recipes based off of those filters
  componentDidUpdate() {
  }

  render() {
    const { recipes, cart } = this.props;
    const recipesArray = Object.values(recipes);

    return (
      <div className="recipe-index">
        {recipesArray.map((recipe, idx) => {
          return <RecipeIndexItem recipe={recipe} cart={cart}/>
        })}
      </div>
    )
  }
}

export default RecipeIndex;