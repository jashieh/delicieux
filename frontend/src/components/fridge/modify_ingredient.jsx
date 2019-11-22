import React from 'react';

class ModifyIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.ingredient.amount,
      error: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyEvent);
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
    if(parseInt(this.state.amount) > 0) {
      this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
        parseInt(this.state.amount - this.props.ingredient.amount))
          .then(() => {this.props.closeModal()});
    } else {
      this.setState({ error: "Amount must be greater than 0."});
    }   
  }

  removeIngredient() {
    this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
      Number.MIN_SAFE_INTEGER)
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
          Modify Amount: 
        </div>
        <input type="number" className="add-ingredient-input" value={this.state.amount}
          onChange={this.update} autoFocus/> g
      </div>
      <div className="error">
        { this.state.error }
      </div>
      <div>
        <div onClick={this.removeIngredient} className="add-ingredient-submit">
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