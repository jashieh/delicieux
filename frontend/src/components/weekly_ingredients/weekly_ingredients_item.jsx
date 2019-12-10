import React from 'react';
import { getConvertAmounts } from '../../util/ingredient_api_util';

// import { modifyFridge } from 

class WeeklyIngredientsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if(this.props.ingredients[this.props.ingredient.id]) {
      this.setState({ checked: true });
    }
  }

  handleClick() {
    let status = this.state.checked;

    if(this.state.checked) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }

    let ingredient = this.props.ingredient;
    getConvertAmounts(ingredient.name, ingredient.unit, ingredient.amount)
      .then(res => {
        if(status) {
          this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
            -res.data.targetAmount);
            this.setState({ checked: false });            
        } else {
          this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
            res.data.targetAmount);
            this.setState({ checked: true });
        }
      });
  }

  render() {
    let amount = 0;
    this.props.ingredient.amount % 1 === 0 ? amount = this.props.ingredient.amount :
      amount = this.props.ingredient.amount.toFixed(2);
    let check = "";

    if(this.state.checked) {
      check = <i className="far fa-check-circle checked"></i>;
    } else {
      check = <i className="far fa-circle"></i>;
    }
    return(
      <li className="weekly-ingredients-item" onClick={this.handleClick}>
        <div className="weekly-ing-checkbox">
          { check }
        </div>
        <div className="weekly-ing-box">
          <div className="weekly-ing-image-container">
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
              alt=""
              className="weekly-ing-image"/>
          </div>
          <div className="weekly-ing-right">
            <div className={`weekly-ing-name ${this.props.have}`}>
            { this.props.ingredient.name }
            </div>
            <div className="weekly-item-amount">
              <div>
                { amount } 
              </div>
              <div>
                { this.props.ingredient.unit }
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}


export default WeeklyIngredientsItem;