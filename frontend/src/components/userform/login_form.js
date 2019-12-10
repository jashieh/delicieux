import React from "react";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/index");
    }

    this.setState({ errors: nextProps.errors });
  }

  handleDemoLogin(email, password) {
    if (email.length > 0) {
      this.setState({ email: this.state.email += email.shift() },
        () => setTimeout(() => this.handleDemoLogin(email, password), 50)
      )
    } else if (password.length > 0) {
      this.setState({ password: this.state.password += password.shift() },
        () => setTimeout(() => this.handleDemoLogin(email, password), 50)
      )
    } else {
      this.props.login(this.state);
    }
  }


  // handleDemo() {
  //   // let { email, password } = this.state;
  //   // let demoUser = {
  //   //   email: "demo_user@delicious.com",
  //   //   password: "password"
  //   // };

  //   return e => {
  //     e.preventDefault();
  //     let email = 'demo_user@delicieux.com'.split("");
  //     let password = 'password'.split("");
  //     this.handleDemoLogin(email, password);
  //   };
  // }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-error" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }


  render() {

    return (
        <div className="session-background">
          <div className="signup-text">délicieux</div>
          <a className="signup-form" class="btn">
            <span>
              <span>
                <span>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <br />

                      <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                        className="login-text"
                      />
                      <br />
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                        className="login-text"
                      />
                      <br />

                      {this.renderErrors()}

                      <div className="login-bottom">

                        <div className="buttons">
                          <input type="submit" value="Submit" className="submit" />
                        </div>

                        <div className="buttons">
                          {/* <button className="submit" onClick={this.handleDemo()}>
                            Demo User
                          </button> */}
                        </div>

                      </div>

                      <div className="go-back">
                        <h2>Don't have an account?</h2>
                        <Link className="back-sign" to="/signup">Sign Up</Link>
                      </div>
                    </div>
                  </form>
                </span>
              </span>
            </span>
          </a>
        </div>
    );
  }
}

export default withRouter(LoginForm);


// React.Fragment --- Fake DOM element
// Everytime the text changes -- we will fire off an event --- onChange / handleChange
// on continue --- calls nextStep



// import React from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import { withRouter } from "react-router-dom";
// import "../stylesheets/modal/modal.scss";
// import TextField from "material-ui/TextField";

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.currentUser === true) {
//       this.props.history.push("/");
//     }

//     this.setState({ errors: nextProps.errors });
//   }

//   update(field) {
//     return e =>
//       this.setState({
//         [field]: e.currentTarget.value
//       });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     let user = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.login(user);
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
//       <MuiThemeProvider>
//         <div className="login-form" onClick={e => e.stopPropagation()}>
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <br />
//               {/* <input
//               type="text"
//               value={this.state.email}
//               onChange={this.update("email")}
//               placeholder="Email"
//             /> */}
//               <br />
//               <input
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.update("password")}
//                 placeholder="Password"
//               />
//               <TextField
//                 hintText="Enter Your Last Name"
//                 floatingLabelText="Last Name"
//                 onChange={this.update("email")}
//               />
//               <br />
//               <input type="submit" value="Submit" />
//               {this.renderErrors()}
//             </div>
//           </form>
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default withRouter(LoginForm);
