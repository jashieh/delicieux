import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
    this.props.nextStep();
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
    return (
      <MuiThemeProvider>
        <div className="modal-background">
          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                <br />
                <TextField
                  type="text"
                  hintText="Enter Your Email"
                  floatingLabelText="Email"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
                <br />
                <TextField
                  type="text"
                  hintText="Enter Your Name"
                  floatingLabelText="Name"
                  value={this.state.name}
                  onChange={this.update("name")}
                />
                <br />
                <TextField
                  type="password"
                  hintText="Enter Your Password"
                  floatingLabelText="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
                <br />
                <TextField
                  type="password"
                  hintText="Confirm Password"
                  floatingLabelText="Confirm Password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                />
                <br />
                <RaisedButton
                  type="submit"
                  label="Submit"
                  primary={true}
                  color="secondary"
                  styles={styles.button}
                />
                <div className="signup-text">
                  <h1>Already Have an Account?</h1>
                  <Link to="/login">
                    <div className="login-contain">
                      Login
                    </div>
                  </Link>
                </div>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = { button: { margin: 100} };

export default withRouter(SignupForm);


// import React from "react";
// import { withRouter } from "react-router-dom";

// class SignupForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       name: "",
//       password: "",
//       password2: "",
//       errors: {}
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.clearedErrors = false;
//   }

//   update(field) {
//     return e => this.setState({ [field]: e.currentTarget.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let user = {
//       email: this.state.email,
//       name: this.state.name,
//       password: this.state.password,
//       password2: this.state.password2
//     };

//     this.props.signup(user, this.props.history);
//   }

//   renderErrors() {
//     return (
//       <ul>
//         {Object.keys(this.state.errors).map((error, i) => (
//           <li key={`error-${i}`}>{this.state.errors[error]}</li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div className="login-form" onClick={e => e.stopPropagation()}>
//         <form onSubmit={this.handleSubmit}>
//           <div className="login-form">
//             <br />
//             <input
//               type="text"
//               value={this.state.email}
//               onChange={this.update("email")}
//               placeholder="Email"
//             />
//             <br />
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.update("name")}
//               placeholder="Name"
//             />
//             <br />
//             <input
//               type="password"
//               value={this.state.password}
//               onChange={this.update("password")}
//               placeholder="Password"
//             />
//             <br />
//             <input
//               type="password"
//               value={this.state.password2}
//               onChange={this.update("password2")}
//               placeholder="Confirm Password"
//             />
//             <br />
//             <input type="submit" value="Submit" />
//             {this.renderErrors()}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(SignupForm);
