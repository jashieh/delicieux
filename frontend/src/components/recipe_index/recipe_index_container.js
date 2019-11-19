import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => ({
  // recipes: state.entities.recipes,
  // cart: state.entities.cart,
  // filters: state.filters.recipes

  recipes: { 
    1: {
      id: 1,
      url: "https://spoonacular.com/recipeImages/530550-556x370.jpg"
    },
    2: {
      id: 2,
      url: "https://spoonacular.com/recipeImages/530550-556x370.jpg"
    },
    3: {
      id: 3,
      url: "https://spoonacular.com/recipeImages/530550-556x370.jpg"
    },
    4: {
      id: 4,
      url: "https://spoonacular.com/recipeImages/530550-556x370.jpg"
    },
  },

  cart: {
    1: { recipe_id: 1, number: 1 },
    2: { recipe_id: 2, number: 2 },
    3: { recipe_id: 3, number: 3 },
    4: { recipe_id: 4, number: 4 }
  }
});

const mapDispatchToProps = (dispatch) => ({
  // getRecipes: (filters) => dispatch(getRecipes(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeIndex)