import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/index");
    }
    this.setState({ errors: nextProps.errors });
  }

  handleSignup() {
    const { email, name, password, password2, height, weight, age } = this.props.values;
    return e => {
      e.preventDefault();
      this.props.signup({ email, name, password, password2, height, weight, age });
    };
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <div className="modal-background">
          <a className="signup-form" class="btn">
              <span>
                <span>
                  <span>
            <form>
              <TextField
                hintText="Enter Your Height"
                floatingLabelText="Height"
                onChange={handleChange("height")}
                defaultValue={values.height}
              />
              <br />
              <TextField
                hintText="Enter Your Weight"
                floatingLabelText="Weight"
                onChange={handleChange("weight")}
                defaultValue={values.weight}
              />
              <br />
              <TextField
                hintText="Enter Your Age"
                floatingLabelText="Age"
                onChange={handleChange("age")}
                defaultValue={values.age}
              />
              <br />
              {/* {this.renderErrors()} */}
              <RaisedButton label="Back" primary={false} onClick={this.back} />
              <button className="submit-button" onClick={this.handleSignup()}>
                Sign Up
              </button>
            </form>
         
                    </span>
                </span>
              </span>
            </a>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
