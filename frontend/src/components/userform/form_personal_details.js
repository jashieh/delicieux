import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends React.Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
          <MuiThemeProvider>
            <div className="modal-background">
              <div className="signup-form">
                <React.Fragment>
                  <TextField
                    hintText="Enter Your Height"
                    floatingLabelText="Height"
                    onChange={handleChange("height")}
                    defaultValue={values.occupation}
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
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                  />
                  <br />
                  <RaisedButton
                    label="Continue"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}
                  />
                  <RaisedButton
                    label="Back"
                    primary={false}
                    styles={styles.button}
                    onClick={this.back}
                  />
                </React.Fragment>
              </div>
            </div>
          </MuiThemeProvider>
        );
  }
}

const styles = { button: { margin: 50 } };

export default FormPersonalDetails;

