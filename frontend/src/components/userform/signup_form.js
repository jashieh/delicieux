import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/styles/typography'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      passErrors: "",
      pass2Errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  handleSubmit(e) {
    e.preventDefault();
    // this.props.nextStep();
    if (this.props.values.name.length === 0) {
      this.setState({ errors: this.state.errors.concat(["Please enter your name"]) });
    } 
    
    if (this.props.values.password.length < 6) {
      this.setState({ errors: this.state.errors.concat(["Password at least 6 characters"]) });
    } else if (this.props.values.password2 !== this.props.values.password ) {
      this.setState({ errors: this.state.errors.concat(["Passwords must match"]) });
    } else {
      this.props.nextStep();
    }

  }

  // handlePassSubmit(e) {
  //   e.preventDefault();
  //   if (this.props.values.password.length === 0) {
  //     this.setState({ errors: this.state.errors.push("Please enter a password.") });
  //   } else if (this.state.password.length < 6) {
  //     this.setState({ passwordErrors: ["Use at least 6 characters."] });
  //   } else {
  //     this.setState({ passwordErrors: [], form: "username" });
  //   }
  // }

  renderNameErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-error" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  renderPasswordErrors() {
    return (
      <ul>
        <li>{this.state.passErrors}</li>
      </ul>
    );
  }

  render() {
    const { values, handleChange } = this.props;

    return (
        <div className="session-background">
          <div className="signup-text">délicieux</div>
          <a className="signup-form" className="btn">
            <span>
              <span>
                <span>
                  <div className="signup-contain">
                    <div className="signup-text-contain">
                      <div>
                        <input type="text"
                          value={values.name}
                          onChange={handleChange('name')}
                          placeholder="Name"
                          className="login-text sign"
                        />
                      </div>
                      {this.renderNameErrors()}
                      <div>
                        <input type="text"
                          value={values.email}
                          onChange={handleChange('email')}
                          placeholder="Email"
                          className="login-text sign"
                        />
                      </div>
                      <div>
                        <input type="password"
                          value={values.password}
                          onChange={handleChange('password')}
                          placeholder="Password"
                          className="login-text sign"
                        />
                      </div>
                      <div>
                        <input type="password"
                          value={values.password2}
                          onChange={handleChange('password2')}
                          placeholder="Confirm Password"
                          className="login-text sign"
                        />
                      </div>
                    </div>
                    <div className="signup-bottom">
                      <button className="submit" onClick={this.handleSubmit}>Continue</button>
                    </div>
                    <div className="go-back">
                      <h2>Already have an account?</h2>
                      <Link className="back-sign" to="/login">Login</Link>
                    </div>
                  </div>
                </span>
              </span>
            </span>
          </a>
        </div>
    );
  }
}

export default SignupForm;


