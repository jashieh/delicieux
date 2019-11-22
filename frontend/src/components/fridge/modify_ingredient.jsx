import React from 'react';

class ModifyIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      error: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
  }

  update(e) {
    this.setState({ amount: e.target.value, error: "" });
  }

  keyEvent(e) {
    if(e.key === 'Enter') {
      this.handleSubmit();
    } else if(e.key === 'Escape') {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {

  }

  removeIngredient() {
    this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
      -9999999999)
        .then(() => {this.props.closeModal()});
  }


  render() {
    return(
      <div className="add-ingredient-modal-container">
      <div className="title">
        { this.props.ingredient.name.charAt(0).toUpperCase() + this.props.ingredient.name.slice(1) }
      </div>
      <div className="add-ingredient-input-container">
        <div className="add-ingredient-input-text">
          Input Amount: 
        </div>
        <input type="number" className="add-ingredient-input" value={this.state.amount}
          onChange={this.update} autoFocus/>
      </div>
      <div className="error">
        { this.state.error }
      </div>
      <div>
        <div onClick={this.removeIngredient}>
          Remove Ingredient
        </div>
        <div onClick={this.handleSubmit} className="add-ingredient-submit">
          Modify Ingredient
        </div>
      </div>
    </div>
    );
  }
}

export default ModifyIngredient;