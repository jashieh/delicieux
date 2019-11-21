import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div>
            <button onClick={this.logoutUser}>Logout</button>
            <button onClick={() => this.props.openSide("first")}>SIDE</button>
          </div>
        );
      } else {
        return (
            <div>
              {/* <button onClick={ () => this.props.openModal("login") }>Login</button>
              <button onClick={ () => this.props.openModal("signup") }>Sign Up</button>
               */}
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
                <button onClick={() => this.props.openSide("first")}>SIDE</button>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav" >
            <h1>Meal Planner</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;