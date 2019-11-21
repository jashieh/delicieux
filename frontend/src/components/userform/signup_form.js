


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
    this.props.nextStep();
    if (this.props.values.name.length === 0) {
      this.setState({ errors: this.state.errors.concat(["Please enter your name"]) });
    } else if (this.props.values.password.length < 6) {
      this.setState({ errors: this.state.errors.concat(["User at least 6 characters"]) });
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
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
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
      <MuiThemeProvider>
        <div className="session-background">
          <div className="signup-text">délicieux</div>
          <a className="signup-form" class="btn">
            <span>
              <span>
                <span>
                  <div className="signup-contain">
                    <div className="signup-text-contain">
                      <div>
                        <TextField
                          style={{
                            color: "blue"
                          }}
                          inputStyle={{ color: "white" }}
                          hintText="Enter Your Name"
                          floatingLabelText="Name"
                          onChange={handleChange("name")}
                          defaultValue={values.name}
                        />
                      </div>
                      <div>
                        <TextField
                          inputStyle={{ color: "white" }}
                          hintText="Enter Your Email"
                          floatingLabelText="Email"
                          onChange={handleChange("email")}
                          defaultValue={values.email}
                        />
                      </div>
                      <div>
                        <TextField
                          inputStyle={{ color: "white" }}
                          type="password"
                          hintText="Enter Your Password"
                          floatingLabelText="Password"
                          defaultValue={values.password}
                          onChange={handleChange("password")}
                        />
                      </div>
                      <div>
                        <TextField
                          inputStyle={{ color: "white" }}
                          type="password"
                          hintText="Confirm Password"
                          floatingLabelText="Password"
                          defaultValue={values.password2}
                          onChange={handleChange("password2")}
                        />
                      </div>
                    </div>
                    <button className="submit" onClick={this.handleSubmit}>Continue</button>
                    <div className="go-back">
                      <h2>Already have an account?</h2>
                      <Link to="/login">Login</Link>
                    </div>
                  </div>
                </span>
              </span>
            </span>
          </a>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SignupForm;


