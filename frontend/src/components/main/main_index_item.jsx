import React from "react";
import "../stylesheets/recipe_index/recipe_index_item.scss";
import Leaf from "../stylesheets/assets/leaf.png";
import Leaf2 from "../stylesheets/assets/leaf2.png";
import Salami from "../stylesheets/assets/salami.png";

const MAX = 21;
const MIN = 0;

class MainIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyEvent);
    this.props.closeModal();
  }

  keyEvent(e) {
    if(e.key === 'Escape') {
      this.props.closeModal();
    }
  }

  onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
  }

  handleModal(recipe) {
    this.props.openModal(recipe);
  }

  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe, rotateToBack, fridge } = this.props;
    const {
      vegetarian,
      vegan,
      title,
      spoonacularScore,
      image,
      servings,
      readyInMinutes,
      nutrition
    } = this.props.recipe;

    let timeC =
      readyInMinutes < 60
        ? readyInMinutes.toString()
        : readyInMinutes < 180
        ? Math.floor(readyInMinutes / 60).toString() + "h"
        : "3h";
    let isVegan;
    if (vegan) {
      isVegan = "Vegan";
    } else if (vegetarian) {
      isVegan = "Vegetarian";
    } else {
      isVegan = "Non Vegan";
    }
    let calorieC = Math.floor(nutrition[0].amount);
    let leaf;
    if (isVegan === "Vegan") {
      leaf = <img className="leaf" src={Leaf2} alt="" />;
    } else if (isVegan === "Vegetarian") {
      leaf = <img className="leaf" src={Leaf} alt="" />;
    } else {
      leaf = <img className="leaf" src={Salami} alt="" />;
    }

    return (
      <div
        className="recipe-index-item main"
        draggable
        onDragStart={this.onDragStart}
        onClick={() => this.handleModal(recipe)}
      >
        <div className="recipe-index-item-image main">
          <img src={image} draggable="false" />
        </div>
        {/* <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div> */}
        <div className="title-time">
          <div className="recipe-index-item-name main">
            {title}
          </div>
        </div>
        {/* <div className="recipe-index-item-add" onClick={this.addToCart}>Add to Cart</div> */}
      </div>
    );
  }
}

export default MainIndexItem;
