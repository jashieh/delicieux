import React from 'react';
import Utensil from '../stylesheets/assets/cutlery.png';
import Calc from '../stylesheets/assets/calc.png';
import Clock from '../stylesheets/assets/clock-two.png';
import { updateRecipeIngredients } from '../../util/recipe_api_util';
import { getIngredientById } from '../../util/ingredient_api_util';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.recipe = this.recipe.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  recipe() {
    let { date, time, cart, recipes } = this.props;
    let recipeId = null;
    if (cart.dates[date]) recipeId = cart.dates[date][time]; //just a precaution
    if (recipes[recipeId]) return recipes[recipeId];
    else if (recipeId)
      this.props.getRecipeDB(recipeId).then(() => recipes[recipeId]);
    return recipeId
      ? { id: null, title: "ERROR: Recipe Not Found", img: "..." }
      : null;
  }

  // TODO: Implement an undo button
  removeFromCart(e) {
    e.stopPropagation();
    const { date, time, cart } = this.props;
    this.props.removeCartMeal(cart.id, { date, time });
  }

  onDrop(e) {
    let recipeId = e.dataTransfer.getData("recipeId");
    if (recipeId) {
      let { cart, date, time, getRecipeDB, addCartMeal, getCart, recipes } = this.props;
      let recipe = this.recipe();
      addCartMeal(cart.id, {
        date,
        time,
        recipeId: parseInt(recipeId),
      })
      .then(() => {
        console.log("x")
        if (recipes[recipeId]) {
          console.log(recipes[recipeId].ingredients);
          let ingredients = recipes[recipeId].ingredients;
          let count = 0;

          for(let i = 0; i < ingredients.length; i++) {
            count++;
            // getIngredientById(ingredients[i].id).then((res) => {

            // });
          }
        };
        // console.log(getRecipeDB(recipeId))
      })
    }
    // .then(
    //   () => getCart(userId)  
    // )

    /* 
      precaution so re-render only happens AFTER the item is added to backend
       comment this in and comment out "ADD_RECIPE" in the cart_reducer to active
    */
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleModal(recipe) {
    this.props.openModal(recipe);
  }

  render() {
    const { time, sourceName, cart } = this.props;
    
    let recipe = null;
    if (cart.dates) recipe = this.recipe();
    if (recipe && recipe.nutrition) {
      let timeC = recipe.readyInMinutes < 60 ? (recipe.readyInMinutes).toString() +"m":
        recipe.readyInMinutes < 180 ? Math.floor(recipe.readyInMinutes / 60).toString() + "h" : "3h+";
      let calorieC = Math.floor(recipe.nutrition[0].amount)  
      return (
        <div className="cart-item" onDragOver={this.onDragOver} onDrop={this.onDrop}>
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-main" onClick={() => this.handleModal(recipe)}>

            <div className="cart-item-info">
              <div className="cart-item-info-text">
                <div className="cart-item-name">
                  {recipe.title.slice(0, 20) + ".."}
                  <div className="cart-item-source">{recipe.sourceName}</div>
                </div>
                <div className="cart-image" >
                  <img className="cart-item-info-image" src={recipe.image} />
                </div>
              </div>

              <div className="cart-item-bottom">
                <div className="cuisine">
                  <div className="cuisine-image">
                    <img src={Utensil} className="uten-icon"/>
                  </div>
                  { recipe.cuisines && recipe.cuisines[0] ? recipe.cuisines[0] : "General"}
                </div>
                <div className="cuisine">
                  <div className="cuisine-image">
                    <img src={Clock} className="uten-icon" />
                  </div>
                  {timeC}
                </div>
                <div className="cuisine">
                  <div className="cuisine-image">
                    <img src={Calc} className="uten-icon" />
                  </div>
                  {calorieC}
                </div>
                <div className="cart-item-remove" onClick={this.removeFromCart}>X</div>
              </div>
            </div>
          </div>
        </div>
      );}
    else
      return (
        <div
          className="cart-item"
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        >
          <div className="cart-item-time">{time}</div>
          <div className="cart-item-info"></div>
        </div>
      );
  }
}

export default CartItem;