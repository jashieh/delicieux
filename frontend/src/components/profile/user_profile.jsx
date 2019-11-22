import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: null,
      height: this.props.user.height,
      weight: this.props.user.weight,
      editHeight: false,
      editWeight: false,
      editGoal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetEdit = this.resetEdit.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchFridge();
    // document.addEventListener("mousedown", this.resetEdit);
    // document.addEventListener("keydown", this.handleSubmit);

  }

  componentWillUnmount() {
    // document.removeEventListener("mousedown", this.resetEdit);
    // document.removeEventListener("keydown", this.handleSubmit);
  }

  resetEdit() {
    // this.setState({ editHeight: false, editWeight: false, editGoal: false, field: null});
  }

  update(field, e) {
    console.log(field);
    console.log(e.target.value)
    console.log(this.state.height)
    return e => {this.setState({ [field]: e.target.value })
    console.log(e.target)};
  }

  handleClick(field) {
    if(field === "height") {
      this.setState({ 
        field: field,
        editHeight: <input type="text" 
          className="user-info-input" 
          value={this.state.height}
          onChange={(e)=>{this.setState({ height: e.target.value}); 
          console.log(this.state.height)}}
          autoFocus/>
      });
    } else if(field === "weight") {
      this.setState({ 
        field: field,
        editWeight: <input type="number" 
          className="user-info-input"
          value={this.state.weight}
          onChange={this.update("weight")}
          autoFocus/>
      });
    } else if(field === "goalWeight") {
      this.setState({ editGoal: <input type="number" className="user-info-input" autoFocus/>});
    }
  }

  handleSubmit(e) {
    if(e.key === "Enter")
    console.log(this.state.field)
  }
  
  render() {
    console.log(this.props.user)
    return (
      <div className="profile-container">
        <div>
          Name: { this.props.user.name[0].toUpperCase() + this.props.user.name.slice(1)}
        </div>
        <div className="profile-item-container">
          <div>
            Gender
          </div>
          <div>
            { this.props.user.gender }
          </div>
        </div>
        <div className="profile-item-container" onClick={() => this.handleClick("height")}>
          Height
          <div>
            { this.state.editHeight || this.props.user.height } cm
          </div>
        </div>
        <div className="profile-item-container">
          Activity Level
          <div>
            { this.props.user.activityLevel} kellys
          </div>
        </div>     
        <div className="profile-item-container" onClick={() => this.handleClick("weight")}>
          Current Weight
          <div>
            { this.state.editWeight || this.props.user.weight } kg
          </div>
        </div>
        <div className="profile-item-container" onClick={() => this.handleClick("goalWeight")}>
          Weight Goal
          <div>
            { this.state.editGoal || this.props.user.weight } kg
          </div>
        </div> 
      </div>
    );
  }
}
  
export default UserProfile;
  
  // User information -- UpdateUser