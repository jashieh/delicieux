import React from 'react';
import WeeklyIngredientsItemContainer from './weekly_ingredients_item_container'


class WeeklyIngredientsCatagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  render() {
      let ing = Object.keys(this.props.ingredients).map(id => {
        return(
          <WeeklyIngredientsItemContainer 
            ingredient={this.props.ingredients[id]}
            key={id}/>
        );
      });
    return(
      <ul>
        <div onClick={this.toggleOpen}>
          {this.props.catagory}
        </div>
        { this.state.open && ing }
      </ul>
    );
  }
}

export default WeeklyIngredientsCatagory;