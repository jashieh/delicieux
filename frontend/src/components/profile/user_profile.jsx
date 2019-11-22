import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFridge();
  }
  
  render() {
    console.log(this.props.user)
    return (
      <div className="profile-container">
        <div>
          Name: { this.props.user.name[0].toUpperCase() + this.props.user.name.slice(1)}
        </div>
        <div>
          <div>
            Gender
          </div>
          
        </div>
        <div>
          Height: { this.props.user.height }
        </div>     
      </div>
    );
  }
}
  
export default UserProfile;
  
  // User information -- UpdateUser