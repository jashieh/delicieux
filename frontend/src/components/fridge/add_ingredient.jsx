import React from 'react';

class AddIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      error: ""
    };

    this.modal = null;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
  }

  componentDidMount() {
    this.modal = document.querySelector('.add-ingredient-modal-container');
    this.modal.addEventListener('keydown', this.hitEnter);
  }

  componentWillUnmount() {
    this.modal.removeEventListener('keydown', this.hitEnter);
  }

  update(e) {
    this.setState({ amount: e.target.value, error: "" });
  }

  hitEnter(e) {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit(e) {
    if(this.props.fridge.ingredients.hasOwnProperty(this.props.ingredient.id)) {
      this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
        parseInt(this.state.amount))
          .then(() => {this.props.closeModal()});
    } else {
        if(parseInt(this.state.amount) > 0) {
          this.props.addFridgeIngredient(this.props.userId, this.props.ingredient, 
            parseInt(this.state.amount))
              .then(() => {this.props.closeModal()});
        } else {
          this.setState({ error: "Amount must be greater than 0."})
        }
      }
  }

  render() {
    return(
      <div className="add-ingredient-modal-container">
        <div className="add-ingredient-modal-header">
          Add Ingredient
        </div>
          Ingredient Name: { this.props.ingredient.name }
        <div className="add-ingredient-input-container">
          <div className="error">
            { this.state.error }
          </div>
          <div className="add-ingredient-input-text">
            Input Amount: 
          </div>
          <input type="number" className="add-ingredient-input" value={this.state.amount}
            onChange={this.update} autoFocus/>
        </div>
        <div className="add-ingredient-modal-footer">
          <div onClick={this.handleSubmit} className="add-ingredient-submit">
            Submit
          </div>
        </div>
      </div>
    );
  }
}

export default AddIngredient;