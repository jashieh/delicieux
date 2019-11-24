import React from 'react';

class AddIngredient extends React.Component {
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

  componentDidMount() {
    // this.modal = document.querySelector('.add-ingredient-modal-container');
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
    if(this.props.fridge.ingredients.hasOwnProperty(this.props.ingredient.id)) {
      if(parseInt(this.state.amount) > 0) {
        this.props.modifyIngredient(this.props.userId, this.props.ingredient, 
          parseInt(this.state.amount))
            .then(() => {this.props.closeModal()});
      } else {
        this.setState({ error: "Amount must be greater than 0."});
      }
    } else {
        if(parseInt(this.state.amount) > 0) {
          this.props.addFridgeIngredient(this.props.userId, this.props.ingredient, 
            parseInt(this.state.amount))
              .then(() => {this.props.closeModal()});
        } else {
          this.setState({ error: "Amount must be greater than 0."});
        }
      }
  }

  render() {
    return(
      <div className="add-ingredient-modal-container">
        <div className="title">
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
            alt=""
            className="fridge-item-image"/>
            <div>

              { this.props.ingredient.name.charAt(0).toUpperCase() + this.props.ingredient.name.slice(1) }
            </div>
        </div>
        <div className="add-ingredient-input-container">
          <div className="add-ingredient-input-text">
            Input Amount: 
          </div>
          <input type="number" className="add-ingredient-input" value={this.state.amount}
            onChange={this.update} autoFocus/> g
        </div>
          <div className="error">
            { this.state.error }
          </div>
        <div onClick={this.handleSubmit} className="add-ingredient-submit">
          Add Ingredient
        </div>
      </div>
    );
  }
}

export default AddIngredient;