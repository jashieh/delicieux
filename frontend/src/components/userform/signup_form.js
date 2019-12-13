  import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.hitEnter);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.hitEnter);
  }

  hitEnter(e) {
    if(e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let bool = true;

    let errors = [];

    if (this.props.values.name.length === 0) {
      errors.push("Please enter your name");
      bool = false;
    } else if (this.props.values.name.length < 2 || this.props.values.name.length > 30) {
      errors.push("Must be between 2 and 30 characters")
      bool = false;
    }

    if (this.props.values.password.length < 6) {
      bool = false;
      errors.push("Password at least 6 characters");
    }
    
    if (this.props.values.password2 !== this.props.values.password ) {
      bool = false;
      errors.push("Passwords must match");
    }

    if (this.props.values.email.length === 0) {
      errors.push("Please enter your email");
      bool = false;
    } else if (!this.props.values.email.includes("@")) {
      errors.push("Invalid Email");
      bool = false;
    }

    this.setState({ errors: errors }, () => console.log(this.state.errors))
    
    if (bool) {
      this.props.nextStep();
    }
    
  }

  renderNameErrors() {

    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  renderNameError() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => {
          if (this.state.errors[error].includes("name")) {
            return (
              <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
              )
            } else if (this.state.errors[error].includes("30")) {
              return (
                <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
              )
            }
        })}
      </ul>
    )
  }

  renderEmailError() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => {
          if (this.state.errors[error].includes("email")) {
            return (
              <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
            )
          } else if (this.state.errors[error].includes("Invalid")) {
            return (
              <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
            )
          }
        })}
      </ul>
    )
  }

  renderPasswordError() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => {
          if (this.state.errors[error].includes("6")) {
            return (
              <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
            )
          }
        })}
      </ul>
    )
  }

  renderConfirmError() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => {
          if (this.state.errors[error].includes("match")) {
            return (
              <li className="login-error sign-err" key={`error-${i}`}>{this.state.errors[error]}</li>
            )
          }
        })}
      </ul>
    )
  }


  render() {
    const { values, handleChange } = this.props;

    return (
        <div className="session-background">
          <div className="signup-text">délicieux</div>
          <div className="signup-form" className="btn">
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
                      {this.renderNameError()}
                      <div>
                        <input type="text"
                          value={values.email}
                          onChange={handleChange('email')}
                          placeholder="Email"
                          className="login-text sign"
                        />
                      </div>
                      {this.renderEmailError()}
                      <div>
                        <input type="password"
                          value={values.password}
                          onChange={handleChange('password')}
                          placeholder="Password"
                          className="login-text sign"
                        />
                      </div>
                      {this.renderPasswordError()}
                      <div>
                        <input type="password"
                          value={values.password2}
                          onChange={handleChange('password2')}
                          placeholder="Confirm Password"
                          className="login-text sign"
                        />
                      </div>
                      {this.renderConfirmError()}
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
          </div>
        </div>
    );
  }
}

export default SignupForm;


