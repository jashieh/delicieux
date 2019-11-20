import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    let times = ["BREAKFAST", "LUNCH", "DINNER"];
    let { cart, currentDate, recipe } = this.props;
    let date = cart.dates[currentDate];
    for (let i = 0; i < times.length; i++) {
      if (!date[times[i]]) {
        this.props.addCartMeal(cart.id, { date: currentDate, time: times[i], recipeId: recipe.id })
        break;
      }
    }
  }


  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe, rotateToBack } = this.props;

    return (
      <div className="recipe-index-item" draggable="true">
        <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div>
        <div className="recipe-index-item-name">{recipe.title}</div>
        <img className="recipe-index-item-image" src={recipe.image}/>
        <div className="recipe-index-item-add" onClick={this.addToCart}>Add to Cart</div>
      </div>
    )
  }
}

export default RecipeIndexItem;