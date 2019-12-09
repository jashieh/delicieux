import React from 'react';
import WeeklyIngredientsItemContainer from './weekly_ingredients_item_container'


class WeeklyIngredientsCatagory extends React.Component {
  render() {
      let ing = Object.keys(this.props.ingredients).map(id => {
        return(
          <WeeklyIngredientsItemContainer 
            ingredient={this.props.ingredients[id]}
            key={id}/>
        );
      })
    return(
      <ul>
        {this.props.catagory}
        { ing }
      </ul>
    );
  }
}

export default WeeklyIngredientsCatagory;