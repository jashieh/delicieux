import React from 'react';
import FridgeItemContainer from './fridge_item_container';
import FridgeCatagory from './fridge_catagory';
import { getIngredientById } from '../../util/ingredient_api_util';


class FridgeIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: {}
    };
    this.ingredients = {};
  }

  componentDidUpdate(prevProps) {
    console.log("asdasda")

    if(this.props !== prevProps) {
      console.log("f")

      let results = 0;
      let ingredients = this.props.ingredients;
      let ids = Object.keys(ingredients);
      console.log(ids);
      if(ids.length === 0) {
        this.setState({ catagories: {} });
        return;
      }
      let ingTemp = {};
      for(let i = 0; i < ids.length; i++) {
        results++;
        getIngredientById(ids[i]).then(res => {

          let aisle = res.data.aisle.split(";")[0];
          ingredients[ids[i]].aisle = aisle;
          ingTemp[ids[i]] = ingredients[ids[i]];
          results--;

          if (results === 0) {
            let ing = {};
            let ids = Object.keys(ingTemp);

            for(let i = 0; i < ids.length; i++) {
              let ingredient = ingTemp[ids[i]];
              let aisle = ingredient.aisle.split(";")[0];

              if(!ing[aisle]) {
                ing[aisle] = {};
              } 

              ing[aisle][ids[i]] = ingredient;
            }
            console.log("x")

            this.setState({ catagories: ing });
          };
        });
      }
    }
  }

  render() {
    let ingredients;
    let catagories;
    let ids = Object.keys(this.state.catagories);

    if(Object.keys(this.state.catagories).length === 0 && Object.keys(this.props.ingredients).length !== 0) {
      catagories = "loading...";
    } else {
      catagories = [];
      for(let i = 0; i < ids.length; i++) {
        catagories.push(<FridgeCatagory 
          key={ids[i]}
          catagory={ids[i]}
          ingredients={this.state.catagories[ids[i]]}
          />);
      }
    }


    // if(this.props.ingredients) {
    //   let fridge = this.props.ingredients;
    //   ingredients = Object.keys(fridge).map(ingredientId => {
    //     return(
    //       <FridgeItemContainer ingredient={fridge[ingredientId]} key={ingredientId}/>
    //     );
    //   });
    // }

    return(
      <div className="fridge-ingredients-container">
        <div className="fridge-contain">
          <div className="ingredients-contain">
            <ul className="fridge-ingredients-ul">
              { catagories }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FridgeIngredients;