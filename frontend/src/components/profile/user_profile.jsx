import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFridge();
  }

  handleClick(e) {

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
        <div className="profile-item-container" onClick={this.handleClick}>
          Height
          <div>
            { this.props.user.height } cm
          </div>
        </div>
        <div className="profile-item-container">
          Activity Level
          <div>
            { this.props.user.activityLevel} kellys
          </div>
        </div>     
        <div className="profile-item-container">
          Current Weight
          <div>
            { this.props.user.weight } kg
          </div>
        </div>
        <div className="profile-item-container">
          Weight Goal
          <div>
            { this.props.user.weight } kg
          </div>
        </div> 
      </div>
    );
  }
}
  
export default UserProfile;
  
  // User information -- UpdateUser