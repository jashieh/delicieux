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


  render() {
    return(
      <div>

      </div>
    );
  }
}

export default ModifyIngredient;