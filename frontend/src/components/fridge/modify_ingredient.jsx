import React from 'react';

class ModifyIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.ingredient.amount,
      error: "",
      hover: false
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.mouseHover = this.mouseHover.bind(this);
  }

  toggleHoverState(state) {
    return {
      hover: !state.hover
    };
  }

  mouseHover() {
    this.setState(this.toggleHoverState);
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
              <div>
                { this.props.ingredient.name.charAt(0).toUpperCase() + this.props.ingredient.name.slice(1) }
              </div>
              <div 
                className="add-ingredient-modal-close"
                onClick={this.props.closeModal}>
                x
              </div>
        </div>
        <div className="add-ingredient-body">  
          <img src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`} 
              alt="" />
          <div className="add-ingredient-input-container">
            <div className="add-ingredient-input-text">
              Modify Amount: 
            </div>
            <div className="add-ingredient-input-box">
              <input type="number" className="add-ingredient-input" value={this.state.amount}
                onChange={this.update} autoFocus/> 
                <div>
                  g
                </div>
            </div>
          </div>
        </div>

      <div className="error">
        { this.state.error }
      </div>
      <div className="add-ingredient-footer">
        <div onClick={this.handleSubmit} className="add-ingredient-submit">
          Submit
        </div>
        <div onClick={this.removeIngredient} 
          className="remove-ingredient"
          onMouseEnter={this.mouseHover} 
          onMouseLeave={this.mouseHover}>
          <i class="far fa-trash-alt"></i>
          { this.state.hover && <div className="hover-flag">Discard</div> }
        </div>
      </div>
    </div>
    );
  }
}

export default ModifyIngredient;