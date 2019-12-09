import React from 'react';
import FridgeItemContainer from './fridge_item_container';


class FridgeCatagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }
  
  render() {
    let ing = Object.keys(this.props.ingredients).map(id => {
      return(
        <FridgeItemContainer
          ingredient={this.props.ingredients[id]}
          key={id}/>
      );
    });
    return(
      <div className="fridge-catagory">
        <div onClick={this.toggleOpen} className="catagory-title">
          {this.props.catagory}
        </div>
        <ul className="fridge-catagory-ul">
          { this.state.open && ing }
        </ul>
      </div>
    );
  }
}

export default FridgeCatagory;