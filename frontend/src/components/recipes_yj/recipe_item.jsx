import React from 'react';

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //see if foodItem exists in db, if it doesn't, initiate ajax query, .fail()
    // const foodItem = axios.get("https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=7b45ae7dd73747a98a9ae6b4abd8a345")
  }
  render() {
    return(
      <div>

      </div>
    );
  }
}