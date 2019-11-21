import React from 'react';
import { closeModal } from '../../actions/modal_actions';

class AddIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ amount: e.target.value });
  }

  handleSubmit(e) {
    if(this.props.fridge.ingredients.hasOwnProperty(this.props.ingredient.id)) {
      this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
        parseInt(this.state.amount));
    } else {
      this.props.addFridgeIngredient(this.props.userId, this.props.ingredient, 
        parseInt(this.state.amount));
    }
  }

  render() {
    return(
      <div className="add-ingredient-modal-container">
        <div>
          Add Ingredient
        </div>
          { this.props.ingredient.name }
        <div>
          <input type="number" className="add-ingredient-input" value={this.state.amount}
            onChange={this.update}/>
        </div>
        <div>
          <input type="button" onClick={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default AddIngredient;