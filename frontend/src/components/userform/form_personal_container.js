import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import FormPersonalDetails from "./form_personal_details";

const mapStateToProps = state => ({
    errors: state.errors.session,
    signedIn: state.session.isSignedIn
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPersonalDetails);
