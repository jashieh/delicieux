import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';
import Leaf from '../stylesheets/assets/leaf.png'
import Salami from '../stylesheets/assets/salami.png'

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
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

  onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.id);
  }


  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe, rotateToBack } = this.props;
    const { vegetarian, vegan, title, spoonacularScore, image, servings } = this.props.recipe


    let isVegan
    if (vegetarian && vegan) {
      isVegan = "Vegan";
    } else {
      isVegan = "Non Vegan";
    }

    let leaf
    if (isVegan === "Vegan") {
      leaf = <img className="leaf" src={Leaf} alt="" />;
    } else {
      leaf = <img className="leaf" src={Salami} alt="" />;
    }

    return (
      <div
        className="recipe-index-item"
        draggable
        onDragStart={this.onDragStart}
      >
        <div className="recipe-index-item-image">
          <img src={image} draggable="false" />
        </div>
        {/* <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div> */}
        <div className="title-time">
          <div className="recipe-index-item-name">
            {title.slice(0, 25) + ".."}
          </div>
          <div className="make">
            <p>10</p>
          </div>
        </div>
        <div className="icon-box">
          <div className="spoon">
            <div className="recipe-index-item-name">{spoonacularScore}</div>
          </div>
          <div className="vegan">
            {leaf}
            <div className="recipe-index-item-name">{isVegan}</div>
          </div>
          <div className="serving-size">
            <div className="recipe-index-item-name">{servings}</div>
          </div>
        </div>
        {/* <div className="recipe-index-item-add" onClick={this.addToCart}>Add to Cart</div> */}
      </div>
    );
  }
}

export default RecipeIndexItem;