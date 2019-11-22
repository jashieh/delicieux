import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
  }


  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe, rotateToBack } = this.props;

    return (
      <div className="recipe-index-item" draggable onDragStart={this.onDragStart}>
        <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div>
        <div className="recipe-index-item-name">{recipe.title}</div>
        <img className="recipe-index-item-image" src={recipe.image} draggable="false"/>
      </div>
    )
  }
}

export default RecipeIndexItem;